import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Event } from 'src/@generated/prisma-nestjs-graphql/event/event.model';
import { MyContext } from 'types';
import { CreateEventInput } from './dto/request.dto';
import { EventService } from './event.service';

@Resolver()
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation(() => Event)
  async createEvent(
    @Args('input') input: CreateEventInput,
    @Context() { req }: MyContext,
  ): Promise<Event> {
    return await this.eventService.createEvent(input, req);
  }

  @Query(() => [Event])
  async findUserEvents(@Context() { req }: MyContext): Promise<Event[]> {
    return await this.eventService.findUserEvents(req);
  }

  @Query(() => Event)
  async findUniqueEvent(@Args('eventId') eventId: number): Promise<Event> {
    return await this.eventService.findUniqueEvent(eventId);
  }
}
