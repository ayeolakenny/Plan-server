import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventTypesCountAggregate } from './event-types-count-aggregate.output';
import { EventTypesAvgAggregate } from './event-types-avg-aggregate.output';
import { EventTypesSumAggregate } from './event-types-sum-aggregate.output';
import { EventTypesMinAggregate } from './event-types-min-aggregate.output';
import { EventTypesMaxAggregate } from './event-types-max-aggregate.output';

@ObjectType()
export class EventTypesGroupBy {

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

    @Field(() => EventTypesCountAggregate, {nullable:true})
    _count?: EventTypesCountAggregate;

    @Field(() => EventTypesAvgAggregate, {nullable:true})
    _avg?: EventTypesAvgAggregate;

    @Field(() => EventTypesSumAggregate, {nullable:true})
    _sum?: EventTypesSumAggregate;

    @Field(() => EventTypesMinAggregate, {nullable:true})
    _min?: EventTypesMinAggregate;

    @Field(() => EventTypesMaxAggregate, {nullable:true})
    _max?: EventTypesMaxAggregate;
}
