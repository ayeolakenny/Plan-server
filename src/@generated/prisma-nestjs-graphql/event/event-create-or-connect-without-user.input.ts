import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventCreateWithoutUserInput } from './event-create-without-user.input';

@InputType()
export class EventCreateOrConnectWithoutUserInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventCreateWithoutUserInput, {nullable:false})
    create!: EventCreateWithoutUserInput;
}
