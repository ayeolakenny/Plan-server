import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateWithoutUserInput } from './event-type-create-without-user.input';
import { EventTypeCreateOrConnectWithoutUserInput } from './event-type-create-or-connect-without-user.input';
import { EventTypeCreateManyUserInputEnvelope } from './event-type-create-many-user-input-envelope.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@InputType()
export class EventTypeCreateNestedManyWithoutUserInput {

    @Field(() => [EventTypeCreateWithoutUserInput], {nullable:true})
    create?: Array<EventTypeCreateWithoutUserInput>;

    @Field(() => [EventTypeCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<EventTypeCreateOrConnectWithoutUserInput>;

    @Field(() => EventTypeCreateManyUserInputEnvelope, {nullable:true})
    createMany?: EventTypeCreateManyUserInputEnvelope;

    @Field(() => [EventTypeWhereUniqueInput], {nullable:true})
    connect?: Array<EventTypeWhereUniqueInput>;
}
