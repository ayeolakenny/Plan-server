import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input';

@InputType()
export class AtendeeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => EventOrderByRelationAggregateInput, {nullable:true})
    event?: EventOrderByRelationAggregateInput;
}
