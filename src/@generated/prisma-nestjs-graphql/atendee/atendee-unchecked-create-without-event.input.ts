import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class AtendeeUncheckedCreateWithoutEventInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
}