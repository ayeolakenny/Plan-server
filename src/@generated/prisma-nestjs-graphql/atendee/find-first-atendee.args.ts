import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeWhereInput } from './atendee-where.input';
import { AtendeeOrderByWithRelationInput } from './atendee-order-by-with-relation.input';
import { AtendeeWhereUniqueInput } from './atendee-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AtendeeScalarFieldEnum } from './atendee-scalar-field.enum';

@ArgsType()
export class FindFirstAtendeeArgs {

    @Field(() => AtendeeWhereInput, {nullable:true})
    where?: AtendeeWhereInput;

    @Field(() => [AtendeeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AtendeeOrderByWithRelationInput>;

    @Field(() => AtendeeWhereUniqueInput, {nullable:true})
    cursor?: AtendeeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AtendeeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AtendeeScalarFieldEnum>;
}
