import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeCreateWithoutUserInput } from './event-type-create-without-user.input';

@InputType()
export class EventTypeCreateOrConnectWithoutUserInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateWithoutUserInput, {nullable:false})
    create!: EventTypeCreateWithoutUserInput;
}
