import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EventListRelationFilter } from '../event/event-list-relation-filter.input';

@InputType()
export class AtendeeWhereInput {

    @Field(() => [AtendeeWhereInput], {nullable:true})
    AND?: Array<AtendeeWhereInput>;

    @Field(() => [AtendeeWhereInput], {nullable:true})
    OR?: Array<AtendeeWhereInput>;

    @Field(() => [AtendeeWhereInput], {nullable:true})
    NOT?: Array<AtendeeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => EventListRelationFilter, {nullable:true})
    event?: EventListRelationFilter;
}
