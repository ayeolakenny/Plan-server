import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AtendeeRelationFilter } from '../atendee/atendee-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class EventWhereInput {

    @Field(() => [EventWhereInput], {nullable:true})
    AND?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    OR?: Array<EventWhereInput>;

    @Field(() => [EventWhereInput], {nullable:true})
    NOT?: Array<EventWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    time?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    additionalNotes?: StringNullableFilter;

    @Field(() => AtendeeRelationFilter, {nullable:true})
    Atendee?: AtendeeRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    atendeeId?: IntNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
