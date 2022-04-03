import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AtendeeCreateWithoutEventInput } from './atendee-create-without-event.input';
import { AtendeeCreateOrConnectWithoutEventInput } from './atendee-create-or-connect-without-event.input';
import { AtendeeUpsertWithoutEventInput } from './atendee-upsert-without-event.input';
import { AtendeeWhereUniqueInput } from './atendee-where-unique.input';
import { AtendeeUpdateWithoutEventInput } from './atendee-update-without-event.input';

@InputType()
export class AtendeeUpdateOneWithoutEventInput {

    @Field(() => AtendeeCreateWithoutEventInput, {nullable:true})
    create?: AtendeeCreateWithoutEventInput;

    @Field(() => AtendeeCreateOrConnectWithoutEventInput, {nullable:true})
    connectOrCreate?: AtendeeCreateOrConnectWithoutEventInput;

    @Field(() => AtendeeUpsertWithoutEventInput, {nullable:true})
    upsert?: AtendeeUpsertWithoutEventInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AtendeeWhereUniqueInput, {nullable:true})
    connect?: AtendeeWhereUniqueInput;

    @Field(() => AtendeeUpdateWithoutEventInput, {nullable:true})
    update?: AtendeeUpdateWithoutEventInput;
}
