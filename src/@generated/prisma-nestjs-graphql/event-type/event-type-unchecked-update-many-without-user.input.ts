import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutUserInput } from './event-type-create-without-user.input';
import { EventTypeCreateOrConnectWithoutUserInput } from './event-type-create-or-connect-without-user.input';
import { EventTypeUpsertWithWhereUniqueWithoutUserInput } from './event-type-upsert-with-where-unique-without-user.input';
import { EventTypeCreateManyUserInputEnvelope } from './event-type-create-many-user-input-envelope.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithWhereUniqueWithoutUserInput } from './event-type-update-with-where-unique-without-user.input';
import { EventTypeUpdateManyWithWhereWithoutUserInput } from './event-type-update-many-with-where-without-user.input';
import { EventTypeScalarWhereInput } from './event-type-scalar-where.input';

@InputType()
export class EventTypeUncheckedUpdateManyWithoutUserInput {

    @Field(() => [EventTypeCreateWithoutUserInput], {nullable:true})
    create?: Array<EventTypeCreateWithoutUserInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutUserInput>;

    @Field(() => [EventTypeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<EventTypeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventTypeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EventTypeCreateManyUserInputEnvelope;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    set?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    disconnect?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    delete?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    connect?: Array<EventTypeWhereUniqueInput>;

    @Field(() => [EventTypeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<EventTypeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventTypeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<EventTypeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventTypeScalarWhereInput], {nullable:true})
    deleteMany?: Array<EventTypeScalarWhereInput>;
}
