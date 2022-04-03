import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EventCreateNestedManyWithoutAtendeeInput } from '../event/event-create-nested-many-without-atendee.input';

@InputType()
export class AtendeeCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    @Validator.IsNotEmpty()
    email!: string;

    @Field(() => EventCreateNestedManyWithoutAtendeeInput, {nullable:true})
    event?: EventCreateNestedManyWithoutAtendeeInput;
}
