import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MESSAGES } from 'core/messages';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { PrismaService } from '../prisma.service';
import * as argon2 from 'argon2';
import { LoginInput } from './dto/request';
import { COOKIE_NAME } from 'src/constants';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async me(req: any): Promise<User> {
    if (!req.session.userId) return null;
    const user = await this.findUnique({ id: req.session.userId });
    return user;
  }

  // Signup user
  async register(input: Prisma.UserCreateInput, req: any): Promise<User> {
    const errMessage = [];
    const emailUsed = await this.findUnique({ email: input.email });
    if (emailUsed) errMessage.push(MESSAGES.AUTH.EMAIL_CONFLICT);
    if (errMessage.length) throw new BadRequestException(errMessage);
    const hashedPassword = await argon2.hash(input.password);
    const user = await this.prisma.user.create({
      data: {
        ...input,
        password: hashedPassword,
      },
    });
    req.session.userId = user.id;
    return user;
  }

  async findUnique(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async login(input: LoginInput, req: any): Promise<User> {
    const errMessage = [];
    const user = await this.findUnique({ email: input.email });
    if (!user) errMessage.push(MESSAGES.AUTH.INVALID_CREDENTIALS);
    if (errMessage.length) throw new BadRequestException(errMessage);
    const valid = await argon2.verify(user.password, input.password);
    if (!valid) errMessage.push(MESSAGES.AUTH.INVALID_CREDENTIALS);
    if (errMessage.length) throw new BadRequestException(errMessage);
    req.session.userId = user.id;
    return user;
  }

  // Logout user
  async logout(req: any, res: any): Promise<Boolean> {
    return new Promise((resolve) =>
      req.session.destroy((err: any) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          resolve(false);
          return;
        }
        resolve(true);
      }),
    );
  }
}
