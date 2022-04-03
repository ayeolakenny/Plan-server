import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AtendeeCountOrderByAggregateInput } from './atendee-count-order-by-aggregate.input';
import { AtendeeAvgOrderByAggregateInput } from './atendee-avg-order-by-aggregate.input';
import { AtendeeMaxOrderByAggregateInput } from './atendee-max-order-by-aggregate.input';
import { AtendeeMinOrderByAggregateInput } from './atendee-min-order-by-aggregate.input';
import { AtendeeSumOrderByAggregateInput } from './atendee-sum-order-by-aggregate.input';

@InputType()
export class AtendeeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => AtendeeCountOrderByAggregateInput, {nullable:true})
    _count?: AtendeeCountOrderByAggregateInput;

    @Field(() => AtendeeAvgOrderByAggregateInput, {nullable:true})
    _avg?: AtendeeAvgOrderByAggregateInput;

    @Field(() => AtendeeMaxOrderByAggregateInput, {nullable:true})
    _max?: AtendeeMaxOrderByAggregateInput;

    @Field(() => AtendeeMinOrderByAggregateInput, {nullable:true})
    _min?: AtendeeMinOrderByAggregateInput;

    @Field(() => AtendeeSumOrderByAggregateInput, {nullable:true})
    _sum?: AtendeeSumOrderByAggregateInput;
}
