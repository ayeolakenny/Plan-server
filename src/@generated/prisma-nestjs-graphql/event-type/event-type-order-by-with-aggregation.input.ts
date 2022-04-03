import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventTypeCountOrderByAggregateInput } from './event-type-count-order-by-aggregate.input';
import { EventTypeAvgOrderByAggregateInput } from './event-type-avg-order-by-aggregate.input';
import { EventTypeMaxOrderByAggregateInput } from './event-type-max-order-by-aggregate.input';
import { EventTypeMinOrderByAggregateInput } from './event-type-min-order-by-aggregate.input';
import { EventTypeSumOrderByAggregateInput } from './event-type-sum-order-by-aggregate.input';

@InputType()
export class EventTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    length?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => EventTypeCountOrderByAggregateInput, {nullable:true})
    _count?: EventTypeCountOrderByAggregateInput;

    @Field(() => EventTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventTypeAvgOrderByAggregateInput;

    @Field(() => EventTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: EventTypeMaxOrderByAggregateInput;

    @Field(() => EventTypeMinOrderByAggregateInput, {nullable:true})
    _min?: EventTypeMinOrderByAggregateInput;

    @Field(() => EventTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: EventTypeSumOrderByAggregateInput;
}
