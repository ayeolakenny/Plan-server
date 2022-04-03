import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventTypeCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    @Validator.IsNotEmpty()
    title!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    @Validator.IsString()
    @Validator.IsNotEmpty()
    description!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    @Validator.IsNotEmpty()
    length!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
