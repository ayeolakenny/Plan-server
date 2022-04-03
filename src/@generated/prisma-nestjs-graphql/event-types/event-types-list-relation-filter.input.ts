import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypesWhereInput } from './event-types-where.input';

@InputType()
export class EventTypesListRelationFilter {

    @Field(() => EventTypesWhereInput, {nullable:true})
    every?: EventTypesWhereInput;

    @Field(() => EventTypesWhereInput, {nullable:true})
    some?: EventTypesWhereInput;

    @Field(() => EventTypesWhereInput, {nullable:true})
    none?: EventTypesWhereInput;
}
