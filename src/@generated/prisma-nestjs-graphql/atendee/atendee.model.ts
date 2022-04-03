import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Event } from '../event/event.model';
import { AtendeeCount } from './atendee-count.output';

@ObjectType()
export class Atendee {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => [Event], {nullable:true})
    event?: Array<Event>;

    @Field(() => AtendeeCount, {nullable:false})
    _count?: AtendeeCount;
}
