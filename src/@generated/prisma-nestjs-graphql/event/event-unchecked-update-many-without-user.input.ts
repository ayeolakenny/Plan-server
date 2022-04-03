import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutUserInput } from './event-create-without-user.input';
import { EventCreateOrConnectWithoutUserInput } from './event-create-or-connect-without-user.input';
import { EventUpsertWithWhereUniqueWithoutUserInput } from './event-upsert-with-where-unique-without-user.input';
import { EventCreateManyUserInputEnvelope } from './event-create-many-user-input-envelope.input';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithWhereUniqueWithoutUserInput } from './event-update-with-where-unique-without-user.input';
import { EventUpdateManyWithWhereWithoutUserInput } from './event-update-many-with-where-without-user.input';
import { EventScalarWhereInput } from './event-scalar-where.input';

@InputType()
export class EventUncheckedUpdateManyWithoutUserInput {

    @Field(() => [EventCreateWithoutUserInput], {nullable:true})
    create?: Array<EventCreateWithoutUserInput>;

    @Field(() => [EventCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EventCreateOrConnectWithoutUserInput>;

    @Field(() => [EventUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<EventUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EventCreateManyUserInputEnvelope;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    set?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    disconnect?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    delete?: Array<EventWhereUniqueInput>;

    @Field(() => [EventWhereUniqueInput], {nullable:true})
    connect?: Array<EventWhereUniqueInput>;

    @Field(() => [EventUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<EventUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<EventUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    deleteMany?: Array<EventScalarWhereInput>;
}
