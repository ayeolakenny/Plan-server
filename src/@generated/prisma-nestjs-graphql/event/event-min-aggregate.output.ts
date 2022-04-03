import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EventMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Date, {nullable:true})
    time?: Date | string;

    @Field(() => String, {nullable:true})
    additionalNotes?: string;

    @Field(() => Int, {nullable:true})
    atendeeId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;
}
