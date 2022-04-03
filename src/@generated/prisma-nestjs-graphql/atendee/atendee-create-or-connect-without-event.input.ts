import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AtendeeWhereUniqueInput } from './atendee-where-unique.input';
import { AtendeeCreateWithoutEventInput } from './atendee-create-without-event.input';

@InputType()
export class AtendeeCreateOrConnectWithoutEventInput {

    @Field(() => AtendeeWhereUniqueInput, {nullable:false})
    where!: AtendeeWhereUniqueInput;

    @Field(() => AtendeeCreateWithoutEventInput, {nullable:false})
    create!: AtendeeCreateWithoutEventInput;
}
