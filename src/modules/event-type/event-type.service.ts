import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { EventType } from 'src/@generated/prisma-nestjs-graphql/event-type/event-type.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EventTypeService {
  constructor(private prisma: PrismaService) {}

  async createEventType(
    input: Prisma.EventTypeCreateInput,
    req: any,
  ): Promise<EventType> {
    if (!req.session.userId) return null;
    return await this.prisma.eventType.create({
      data: {
        ...input,
        User: { connect: { id: req.session.userId } },
      },
    });
  }

  async findUserEventTypes(req: any) {
    if (!req.session.userId) return null;
    return await this.prisma.eventType.findMany({
      where: {
        userId: { equals: req.session.userId },
      },
    });
  }
}
