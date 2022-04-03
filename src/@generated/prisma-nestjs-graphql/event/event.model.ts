import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Atendee } from '../atendee/atendee.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => Date, {nullable:false})
    time!: Date;

    @Field(() => String, {nullable:true})
    additionalNotes!: string | null;

    @Field(() => Atendee, {nullable:true})
    Atendee?: Atendee | null;

    @Field(() => Int, {nullable:true})
    atendeeId!: number | null;

    @Field(() => User, {nullable:true})
    User?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;
}
