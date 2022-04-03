import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutUserInput } from './event-type-update-without-user.input';

@InputType()
export class EventTypeUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutUserInput, {nullable:false})
    data!: EventTypeUpdateWithoutUserInput;
}
