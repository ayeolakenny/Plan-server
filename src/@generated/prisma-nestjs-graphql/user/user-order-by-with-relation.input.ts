import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventTypeOrderByRelationAggregateInput } from '../event-type/event-type-order-by-relation-aggregate.input';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => EventTypeOrderByRelationAggregateInput, {nullable:true})
    eventTypes?: EventTypeOrderByRelationAggregateInput;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    event?: EventOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
