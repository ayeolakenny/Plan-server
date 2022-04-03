import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventType } from 'src/@generated/prisma-nestjs-graphql/event-type/event-type.model';
import { EventTypesCreateInput } from 'src/@generated/prisma-nestjs-graphql/event-types/event-types-create.input';
import { MyContext } from 'types';
import { EventTypeService } from './event-type.service';

@Resolver()
export class EventTypeResolver {
  constructor(private readonly eventTypesService: EventTypeService) {}

  @Mutation(() => EventType)
  async createEventType(
    @Args('input') input: EventTypesCreateInput,
    @Context() { req }: MyContext,
  ): Promise<EventType> {
    return await this.eventTypesService.createEventType(input, req);
  }

  @Query(() => [EventType])
  async findUserEventTypes(
    @Context() { req }: MyContext,
  ): Promise<EventType[]> {
    return await this.eventTypesService.findUserEventTypes(req);
  }
}
