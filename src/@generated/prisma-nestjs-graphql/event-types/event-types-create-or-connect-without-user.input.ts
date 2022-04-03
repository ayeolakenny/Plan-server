import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';
import { EventTypesCreateWithoutUserInput } from './event-types-create-without-user.input';

@InputType()
export class EventTypesCreateOrConnectWithoutUserInput {

    @Field(() => EventTypesWhereUniqueInput, {nullable:false})
    where!: EventTypesWhereUniqueInput;

    @Field(() => EventTypesCreateWithoutUserInput, {nullable:false})
    create!: EventTypesCreateWithoutUserInput;
}
