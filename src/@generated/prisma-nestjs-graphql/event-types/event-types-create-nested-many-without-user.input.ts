import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypesCreateWithoutUserInput } from './event-types-create-without-user.input';
import { EventTypesCreateOrConnectWithoutUserInput } from './event-types-create-or-connect-without-user.input';
import { EventTypesCreateManyUserInputEnvelope } from './event-types-create-many-user-input-envelope.input';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';

@InputType()
export class EventTypesCreateNestedManyWithoutUserInput {

    @Field(() => [EventTypesCreateWithoutUserInput], {nullable:true})
    create?: Array<EventTypesCreateWithoutUserInput>;

    @Field(() => [EventTypesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EventTypesCreateOrConnectWithoutUserInput>;

    @Field(() => EventTypesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EventTypesCreateManyUserInputEnvelope;

    @Field(() => [EventTypesWhereUniqueInput], {nullable:true})
    connect?: Array<EventTypesWhereUniqueInput>;
}
