import { Injectable } from '@nestjs/common';
import { Event } from 'src/@generated/prisma-nestjs-graphql/event/event.model';
import { PrismaService } from '../prisma.service';
import { CreateEventInput } from './dto/request.dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async createEvent(input: CreateEventInput, req: any): Promise<Event> {
    if (!req.session.userId) return null;
    const { additionalNotes, attendeeEmail, attendeeName, date, time } = input;
    const attendee = await this.prisma.atendee.create({
      data: {
        email: attendeeEmail,
        name: attendeeName,
      },
    });
    return await this.prisma.event.create({
      data: {
        date,
        time,
        additionalNotes,
        Atendee: { connect: { id: attendee.id } },
        User: { connect: { id: req.session.userId } },
      },
    });
  }

  async findUserEvents(req: any) {
    if (!req.session.userId) return null;
    return await this.prisma.event.findMany({
      where: {
        userId: { equals: req.session.userId },
      },
      select: {
        Atendee: { select: { email: true, name: true, id: true } },
        id: true,
        date: true,
        additionalNotes: true,
        time: true,
        atendeeId: true,
        userId: true,
      },
    });
  }

  async findUniqueEvent(eventId: number) {
    return await this.prisma.event.findUnique({
      where: { id: eventId },
      select: {
        Atendee: { select: { email: true, name: true, id: true } },
        id: true,
        date: true,
        additionalNotes: true,
        time: true,
        atendeeId: true,
        userId: true,
      },
    });
  }
}
