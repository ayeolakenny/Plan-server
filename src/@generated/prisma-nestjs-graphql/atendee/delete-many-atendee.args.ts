import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeWhereInput } from './atendee-where.input';

@ArgsType()
export class DeleteManyAtendeeArgs {

    @Field(() => AtendeeWhereInput, {nullable:true})
    where?: AtendeeWhereInput;
}
