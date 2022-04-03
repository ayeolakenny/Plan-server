import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeCreateInput } from './atendee-create.input';

@ArgsType()
export class CreateOneAtendeeArgs {

    @Field(() => AtendeeCreateInput, {nullable:false})
    data!: AtendeeCreateInput;
}
