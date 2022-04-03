import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AtendeeScalarWhereWithAggregatesInput {

    @Field(() => [AtendeeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AtendeeScalarWhereWithAggregatesInput>;

    @Field(() => [AtendeeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AtendeeScalarWhereWithAggregatesInput>;

    @Field(() => [AtendeeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AtendeeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;
}
