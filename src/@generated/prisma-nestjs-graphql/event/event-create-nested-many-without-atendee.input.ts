import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutAtendeeInput } from './event-create-without-atendee.input';
import { EventCreateOrConnectWithoutAtendeeInput } from './event-create-or-connect-without-atendee.input';
import { EventCreateManyAtendeeInputEnvelope } from './event-create-many-atendee-input-envelope.input';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedManyWithoutAtendeeInput {

    @Field(() => [EventCreateWithoutAtendeeInput], {nullable:true})
    create?: Array<EventCreateWithoutAtendeeInput>;

    @Field(() => [EventCreateOrConnectWithoutAtendeeInput], {nullable:true})
    connectOrCreate?: Array<EventCreateOrConnectWithoutAtendeeInput>;

    @Field(() => EventCreateManyAtendeeInputEnvelope, {nullable:true})
    createMany?: EventCreateManyAtendeeInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    connect?: Array<EventWhereUniqueInput>;
}
