import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class EventScalarWhereInput {

    @Field(() => [EventScalarWhereInput], {nullable:true})
    AND?: Array<EventScalarWhereInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    OR?: Array<EventScalarWhereInput>;

    @Field(() => [EventScalarWhereInput], {nullable:true})
    NOT?: Array<EventScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    time?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    additionalNotes?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    atendeeId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;
}
