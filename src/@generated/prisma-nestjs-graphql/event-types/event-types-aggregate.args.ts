import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesWhereInput } from './event-types-where.input';
import { EventTypesOrderByWithRelationInput } from './event-types-order-by-with-relation.input';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventTypesCountAggregateInput } from './event-types-count-aggregate.input';
import { EventTypesAvgAggregateInput } from './event-types-avg-aggregate.input';
import { EventTypesSumAggregateInput } from './event-types-sum-aggregate.input';
import { EventTypesMinAggregateInput } from './event-types-min-aggregate.input';
import { EventTypesMaxAggregateInput } from './event-types-max-aggregate.input';

@ArgsType()
export class EventTypesAggregateArgs {

    @Field(() => EventTypesWhereInput, {nullable:true})
    where?: EventTypesWhereInput;

    @Field(() => [EventTypesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EventTypesOrderByWithRelationInput>;

    @Field(() => EventTypesWhereUniqueInput, {nullable:true})
    cursor?: EventTypesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EventTypesCountAggregateInput, {nullable:true})
    _count?: EventTypesCountAggregateInput;

    @Field(() => EventTypesAvgAggregateInput, {nullable:true})
    _avg?: EventTypesAvgAggregateInput;

    @Field(() => EventTypesSumAggregateInput, {nullable:true})
    _sum?: EventTypesSumAggregateInput;

    @Field(() => EventTypesMinAggregateInput, {nullable:true})
    _min?: EventTypesMinAggregateInput;

    @Field(() => EventTypesMaxAggregateInput, {nullable:true})
    _max?: EventTypesMaxAggregateInput;
}
