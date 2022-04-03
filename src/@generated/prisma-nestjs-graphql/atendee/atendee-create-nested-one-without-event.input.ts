import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AtendeeCreateWithoutEventInput } from './atendee-create-without-event.input';
import { AtendeeCreateOrConnectWithoutEventInput } from './atendee-create-or-connect-without-event.input';
import { AtendeeWhereUniqueInput } from './atendee-where-unique.input';

@InputType()
export class AtendeeCreateNestedOneWithoutEventInput {

    @Field(() => AtendeeCreateWithoutEventInput, {nullable:true})
    create?: AtendeeCreateWithoutEventInput;

    @Field(() => AtendeeCreateOrConnectWithoutEventInput, {nullable:true})
    connectOrCreate?: AtendeeCreateOrConnectWithoutEventInput;

    @Field(() => AtendeeWhereUniqueInput, {nullable:true})
    connect?: AtendeeWhereUniqueInput;
}
