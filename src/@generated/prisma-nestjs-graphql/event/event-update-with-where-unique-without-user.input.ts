import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutUserInput } from './event-update-without-user.input';

@InputType()
export class EventUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutUserInput, {nullable:false})
    data!: EventUpdateWithoutUserInput;
}
