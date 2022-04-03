import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutAtendeeInput } from './event-update-without-atendee.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutAtendeeInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutAtendeeInput, {nullable:false})
    data!: EventUpdateWithoutAtendeeInput;
}
