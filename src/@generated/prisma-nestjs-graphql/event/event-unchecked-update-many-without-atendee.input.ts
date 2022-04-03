import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutAtendeeInput } from './event-create-without-atendee.input';
import { EventCreateOrConnectWithoutAtendeeInput } from './event-create-or-connect-without-atendee.input';
import { EventUpsertWithWhereUniqueWithoutAtendeeInput } from './event-upsert-with-where-unique-without-atendee.input';
import { EventCreateManyAtendeeInputEnvelope } from './event-create-many-atendee-input-envelope.input';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutAtendeeInput } from './event-update-with-where-unique-without-atendee.input';
import { EventUpdateManyWithWhereWithoutAtendeeInput } from './event-update-many-with-where-without-atendee.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUncheckedUpdateManyWithoutAtendeeInput {

    @Field(() => [EventCreateWithoutAtendeeInput], {nullable:true})
    create?: Array<EventCreateWithoutAtendeeInput>;

    @Field(() => [EventCreateOrConnectWithoutAtendeeInput], {nullable:true})
    connectOrCreate?: Array<EventCreateOrConnectWithoutAtendeeInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutAtendeeInput], {nullable:true})
    upsert?: Array<EventUpsertWithWhereUniqueWithoutAtendeeInput>;

    @Field(() => EventCreateManyAtendeeInputEnvelope, {nullable:true})
    createMany?: EventCreateManyAtendeeInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    set?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    disconnect?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    delete?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    connect?: Array<EventWhereUniqueInput>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutAtendeeInput], {nullable:true})
    update?: Array<EventUpdateWithWhereUniqueWithoutAtendeeInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutAtendeeInput], {nullable:true})
    updateMany?: Array<EventUpdateManyWithWhereWithoutAtendeeInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    deleteMany?: Array<EventScalarWhereInput>;
}
