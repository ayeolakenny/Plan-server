import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventCreateWithoutAtendeeInput } from './event-create-without-atendee.input';

@InputType()
export class EventCreateOrConnectWithoutAtendeeInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventCreateWithoutAtendeeInput, {nullable:false})
    create!: EventCreateWithoutAtendeeInput;
}
