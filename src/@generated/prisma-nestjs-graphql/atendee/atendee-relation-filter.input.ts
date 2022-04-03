import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AtendeeWhereInput } from './atendee-where.input';

@InputType()
export class AtendeeRelationFilter {

    @Field(() => AtendeeWhereInput, {nullable:true})
    is?: AtendeeWhereInput;

    @Field(() => AtendeeWhereInput, {nullable:true})
    isNot?: AtendeeWhereInput;
}
