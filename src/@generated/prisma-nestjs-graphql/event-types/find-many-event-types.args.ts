import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesWhereInput } from './event-types-where.input';
import { EventTypesOrderByWithRelationInput } from './event-types-order-by-with-relation.input';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EventTypesScalarFieldEnum } from './event-types-scalar-field.enum';

@ArgsType()
export class FindManyEventTypesArgs {

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

    @Field(() => [EventTypesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof EventTypesScalarFieldEnum>;
}
