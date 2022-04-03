import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeWhereInput } from './atendee-where.input';
import { AtendeeOrderByWithAggregationInput } from './atendee-order-by-with-aggregation.input';
import { AtendeeScalarFieldEnum } from './atendee-scalar-field.enum';
import { AtendeeScalarWhereWithAggregatesInput } from './atendee-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AtendeeCountAggregateInput } from './atendee-count-aggregate.input';
import { AtendeeAvgAggregateInput } from './atendee-avg-aggregate.input';
import { AtendeeSumAggregateInput } from './atendee-sum-aggregate.input';
import { AtendeeMinAggregateInput } from './atendee-min-aggregate.input';
import { AtendeeMaxAggregateInput } from './atendee-max-aggregate.input';

@ArgsType()
export class AtendeeGroupByArgs {

    @Field(() => AtendeeWhereInput, {nullable:true})
    where?: AtendeeWhereInput;

    @Field(() => [AtendeeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AtendeeOrderByWithAggregationInput>;

    @Field(() => [AtendeeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AtendeeScalarFieldEnum>;

    @Field(() => AtendeeScalarWhereWithAggregatesInput, {nullable:true})
    having?: AtendeeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AtendeeCountAggregateInput, {nullable:true})
    _count?: AtendeeCountAggregateInput;

    @Field(() => AtendeeAvgAggregateInput, {nullable:true})
    _avg?: AtendeeAvgAggregateInput;

    @Field(() => AtendeeSumAggregateInput, {nullable:true})
    _sum?: AtendeeSumAggregateInput;

    @Field(() => AtendeeMinAggregateInput, {nullable:true})
    _min?: AtendeeMinAggregateInput;

    @Field(() => AtendeeMaxAggregateInput, {nullable:true})
    _max?: AtendeeMaxAggregateInput;
}
