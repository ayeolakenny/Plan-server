import { Module } from '@nestjs/common';
import { EventTypeService } from './event-type.service';
import { EventTypeResolver } from './event-type.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [EventTypeResolver, EventTypeService, PrismaService],
})
export class EventTypeModule {}
