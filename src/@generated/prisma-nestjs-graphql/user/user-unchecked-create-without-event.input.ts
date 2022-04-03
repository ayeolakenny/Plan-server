import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EventTypeUncheckedCreateNestedManyWithoutUserInput } from '../event-type/event-type-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutEventInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => EventTypeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
