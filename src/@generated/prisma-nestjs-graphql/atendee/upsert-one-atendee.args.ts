import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeWhereUniqueInput } from './atendee-where-unique.input';
import { AtendeeCreateInput } from './atendee-create.input';
import { AtendeeUpdateInput } from './atendee-update.input';

@ArgsType()
export class UpsertOneAtendeeArgs {

    @Field(() => AtendeeWhereUniqueInput, {nullable:false})
    where!: AtendeeWhereUniqueInput;

    @Field(() => AtendeeCreateInput, {nullable:false})
    create!: AtendeeCreateInput;

    @Field(() => AtendeeUpdateInput, {nullable:false})
    update!: AtendeeUpdateInput;
}
