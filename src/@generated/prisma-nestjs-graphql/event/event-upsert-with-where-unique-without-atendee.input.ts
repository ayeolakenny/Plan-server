import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutAtendeeInput } from './event-update-without-atendee.input';
import { EventCreateWithoutAtendeeInput } from './event-create-without-atendee.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutAtendeeInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutAtendeeInput, {nullable:false})
    update!: EventUpdateWithoutAtendeeInput;

    @Field(() => EventCreateWithoutAtendeeInput, {nullable:false})
    create!: EventCreateWithoutAtendeeInput;
}
