import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';
import { EventTypesUpdateWithoutUserInput } from './event-types-update-without-user.input';

@InputType()
export class EventTypesUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => EventTypesWhereUniqueInput, {nullable:false})
    where!: EventTypesWhereUniqueInput;

    @Field(() => EventTypesUpdateWithoutUserInput, {nullable:false})
    data!: EventTypesUpdateWithoutUserInput;
}
