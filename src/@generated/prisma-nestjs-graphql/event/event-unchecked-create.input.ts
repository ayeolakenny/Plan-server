import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EventUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:false})
    time!: Date | string;

    @Field(() => String, {nullable:true})
    additionalNotes?: string;

    @Field(() => Int, {nullable:true})
    atendeeId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
