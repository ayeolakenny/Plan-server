import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeUpdateInput } from './atendee-update.input';
import { AtendeeWhereUniqueInput } from './atendee-where-unique.input';

@ArgsType()
export class UpdateOneAtendeeArgs {

    @Field(() => AtendeeUpdateInput, {nullable:false})
    data!: AtendeeUpdateInput;

    @Field(() => AtendeeWhereUniqueInput, {nullable:false})
    where!: AtendeeWhereUniqueInput;
}
