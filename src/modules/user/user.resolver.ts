import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { MyContext } from 'types';
import { LoginInput } from './dto/request';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async register(
    @Args('input') input: UserCreateInput,
    @Context() { req }: MyContext,
  ): Promise<User> {
    return await this.userService.register(input, req);
  }

  @Query(() => User)
  findUserById(@Args('userId') userId: number) {
    return this.userService.findUnique({ id: userId });
  }

  //Login
  @Mutation(() => User)
  login(
    @Args('input') input: LoginInput,
    @Context() { req }: MyContext,
  ): Promise<User> {
    return this.userService.login(input, req);
  }

  // Logout a user
  @Mutation(() => Boolean)
  async logout(@Context() { req, res }: MyContext): Promise<Boolean> {
    return this.userService.logout(req, res);
  }

  // Get logged in user
  @Query(() => User, { nullable: true })
  async me(@Context() { req }: MyContext): Promise<User> {
    return this.userService.me(req);
  }
}
