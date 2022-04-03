import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypesCreateWithoutUserInput } from './event-types-create-without-user.input';
import { EventTypesCreateOrConnectWithoutUserInput } from './event-types-create-or-connect-without-user.input';
import { EventTypesUpsertWithWhereUniqueWithoutUserInput } from './event-types-upsert-with-where-unique-without-user.input';
import { EventTypesCreateManyUserInputEnvelope } from './event-types-create-many-user-input-envelope.input';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';
import { EventTypesUpdateWithWhereUniqueWithoutUserInput } from './event-types-update-with-where-unique-without-user.input';
import { EventTypesUpdateManyWithWhereWithoutUserInput } from './event-types-update-many-with-where-without-user.input';
import { EventTypesScalarWhereInput } from './event-types-scalar-where.input';

@InputType()
export class EventTypesUpdateManyWithoutUserInput {

    @Field(() => [EventTypesCreateWithoutUserInput], {nullable:true})
    create?: Array<EventTypesCreateWithoutUserInput>;

    @Field(() => [EventTypesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EventTypesCreateOrConnectWithoutUserInput>;

    @Field(() => [EventTypesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<EventTypesUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => EventTypesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EventTypesCreateManyUserInputEnvelope;

    @Field(() => [EventTypesWhereUniqueInput], {nullable:true})
    set?: Array<EventTypesWhereUniqueInput>;

    @Field(() => [EventTypesWhereUniqueInput], {nullable:true})
    disconnect?: Array<EventTypesWhereUniqueInput>;

    @Field(() => [EventTypesWhereUniqueInput], {nullable:true})
    delete?: Array<EventTypesWhereUniqueInput>;

    @Field(() => [EventTypesWhereUniqueInput], {nullable:true})
    connect?: Array<EventTypesWhereUniqueInput>;

    @Field(() => [EventTypesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<EventTypesUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [EventTypesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<EventTypesUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [EventTypesScalarWhereInput], {nullable:true})
    deleteMany?: Array<EventTypesScalarWhereInput>;
}
