import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EventTypeCreateNestedManyWithoutUserInput } from '../event-type/event-type-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutEventInput {

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    @Validator.IsNotEmpty()
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => EventTypeCreateNestedManyWithoutUserInput, {nullable:true})
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
