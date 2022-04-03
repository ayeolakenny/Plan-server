import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeUpdateManyMutationInput } from './atendee-update-many-mutation.input';
import { AtendeeWhereInput } from './atendee-where.input';

@ArgsType()
export class UpdateManyAtendeeArgs {

    @Field(() => AtendeeUpdateManyMutationInput, {nullable:false})
    data!: AtendeeUpdateManyMutationInput;

    @Field(() => AtendeeWhereInput, {nullable:true})
    where?: AtendeeWhereInput;
}
