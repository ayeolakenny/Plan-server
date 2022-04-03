import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';
import { EventTypesUpdateWithoutUserInput } from './event-types-update-without-user.input';
import { EventTypesCreateWithoutUserInput } from './event-types-create-without-user.input';

@InputType()
export class EventTypesUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => EventTypesWhereUniqueInput, {nullable:false})
    where!: EventTypesWhereUniqueInput;

    @Field(() => EventTypesUpdateWithoutUserInput, {nullable:false})
    update!: EventTypesUpdateWithoutUserInput;

    @Field(() => EventTypesCreateWithoutUserInput, {nullable:false})
    create!: EventTypesCreateWithoutUserInput;
}
