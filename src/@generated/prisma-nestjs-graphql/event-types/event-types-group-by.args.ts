import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesWhereInput } from './event-types-where.input';
import { EventTypesOrderByWithAggregationInput } from './event-types-order-by-with-aggregation.input';
import { EventTypesScalarFieldEnum } from './event-types-scalar-field.enum';
import { EventTypesScalarWhereWithAggregatesInput } from './event-types-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { EventTypesCountAggregateInput } from './event-types-count-aggregate.input';
import { EventTypesAvgAggregateInput } from './event-types-avg-aggregate.input';
import { EventTypesSumAggregateInput } from './event-types-sum-aggregate.input';
import { EventTypesMinAggregateInput } from './event-types-min-aggregate.input';
import { EventTypesMaxAggregateInput } from './event-types-max-aggregate.input';

@ArgsType()
export class EventTypesGroupByArgs {

    @Field(() => EventTypesWhereInput, {nullable:true})
    where?: EventTypesWhereInput;

    @Field(() => [EventTypesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<EventTypesOrderByWithAggregationInput>;

    @Field(() => [EventTypesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EventTypesScalarFieldEnum>;

    @Field(() => EventTypesScalarWhereWithAggregatesInput, {nullable:true})
    having?: EventTypesScalarWhereWithAggregatesInput;

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
