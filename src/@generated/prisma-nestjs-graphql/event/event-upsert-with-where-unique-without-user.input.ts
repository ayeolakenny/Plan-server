import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutUserInput } from './event-update-without-user.input';
import { EventCreateWithoutUserInput } from './event-create-without-user.input';

@InputType()
export class EventUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EventWhereUniqueInput, {nullable:false})
    where!: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutUserInput, {nullable:false})
    update!: EventUpdateWithoutUserInput;

    @Field(() => EventCreateWithoutUserInput, {nullable:false})
    create!: EventCreateWithoutUserInput;
}
