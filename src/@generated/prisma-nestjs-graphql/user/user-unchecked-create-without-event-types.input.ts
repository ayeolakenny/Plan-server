import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { EventUncheckedCreateNestedManyWithoutUserInput } from '../event/event-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutEventTypesInput {

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

    @Field(() => EventUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    event?: EventUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
