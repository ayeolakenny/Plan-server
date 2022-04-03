import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeWhereUniqueInput } from './atendee-where-unique.input';

@ArgsType()
export class DeleteOneAtendeeArgs {

    @Field(() => AtendeeWhereUniqueInput, {nullable:false})
    where!: AtendeeWhereUniqueInput;
}
