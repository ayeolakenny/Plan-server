import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AtendeeCreateManyInput } from './atendee-create-many.input';

@ArgsType()
export class CreateManyAtendeeArgs {

    @Field(() => [AtendeeCreateManyInput], {nullable:false})
    data!: Array<AtendeeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
