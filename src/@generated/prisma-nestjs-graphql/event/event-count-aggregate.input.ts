import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EventCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    date?: true;

    @Field(() => Boolean, {nullable:true})
    time?: true;

    @Field(() => Boolean, {nullable:true})
    additionalNotes?: true;

    @Field(() => Boolean, {nullable:true})
    atendeeId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
