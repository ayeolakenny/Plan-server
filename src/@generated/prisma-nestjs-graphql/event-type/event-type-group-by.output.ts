import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventTypeCountAggregate } from './event-type-count-aggregate.output';
import { EventTypeAvgAggregate } from './event-type-avg-aggregate.output';
import { EventTypeSumAggregate } from './event-type-sum-aggregate.output';
import { EventTypeMinAggregate } from './event-type-min-aggregate.output';
import { EventTypeMaxAggregate } from './event-type-max-aggregate.output';

@ObjectType()
export class EventTypeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    length!: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => EventTypeCountAggregate, {nullable:true})
    _count?: EventTypeCountAggregate;

    @Field(() => EventTypeAvgAggregate, {nullable:true})
    _avg?: EventTypeAvgAggregate;

    @Field(() => EventTypeSumAggregate, {nullable:true})
    _sum?: EventTypeSumAggregate;

    @Field(() => EventTypeMinAggregate, {nullable:true})
    _min?: EventTypeMinAggregate;

    @Field(() => EventTypeMaxAggregate, {nullable:true})
    _max?: EventTypeMaxAggregate;
}
