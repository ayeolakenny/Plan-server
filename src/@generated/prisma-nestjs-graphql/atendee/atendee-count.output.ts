import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AtendeeCount {

    @Field(() => Int, {nullable:false})
    event?: number;
}
