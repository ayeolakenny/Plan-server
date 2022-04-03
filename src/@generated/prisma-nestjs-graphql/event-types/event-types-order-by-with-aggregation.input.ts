import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventTypesCountOrderByAggregateInput } from './event-types-count-order-by-aggregate.input';
import { EventTypesAvgOrderByAggregateInput } from './event-types-avg-order-by-aggregate.input';
import { EventTypesMaxOrderByAggregateInput } from './event-types-max-order-by-aggregate.input';
import { EventTypesMinOrderByAggregateInput } from './event-types-min-order-by-aggregate.input';
import { EventTypesSumOrderByAggregateInput } from './event-types-sum-order-by-aggregate.input';

@InputType()
export class EventTypesOrderByWithAggregationInput {

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

    @Field(() => EventTypesCountOrderByAggregateInput, {nullable:true})
    _count?: EventTypesCountOrderByAggregateInput;

    @Field(() => EventTypesAvgOrderByAggregateInput, {nullable:true})
    _avg?: EventTypesAvgOrderByAggregateInput;

    @Field(() => EventTypesMaxOrderByAggregateInput, {nullable:true})
    _max?: EventTypesMaxOrderByAggregateInput;

    @Field(() => EventTypesMinOrderByAggregateInput, {nullable:true})
    _min?: EventTypesMinOrderByAggregateInput;

    @Field(() => EventTypesSumOrderByAggregateInput, {nullable:true})
    _sum?: EventTypesSumOrderByAggregateInput;
}
