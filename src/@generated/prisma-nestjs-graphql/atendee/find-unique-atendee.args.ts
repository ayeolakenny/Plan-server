import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeWhereUniqueInput } from './atendee-where-unique.input';

@ArgsType()
export class FindUniqueAtendeeArgs {

    @Field(() => AtendeeWhereUniqueInput, {nullable:false})
    where!: AtendeeWhereUniqueInput;
}
