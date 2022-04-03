import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeUpdateWithoutUserInput } from './event-type-update-without-user.input';
import { EventTypeCreateWithoutUserInput } from './event-type-create-without-user.input';

@InputType()
export class EventTypeUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeUpdateWithoutUserInput, {nullable:false})
    update!: EventTypeUpdateWithoutUserInput;

    @Field(() => EventTypeCreateWithoutUserInput, {nullable:false})
    create!: EventTypeCreateWithoutUserInput;
}
