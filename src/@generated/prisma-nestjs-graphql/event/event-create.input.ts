import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AtendeeCreateNestedOneWithoutEventInput } from '../atendee/atendee-create-nested-one-without-event.input';
import { UserCreateNestedOneWithoutEventInput } from '../user/user-create-nested-one-without-event.input';

@InputType()
export class EventCreateInput {

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:false})
    time!: Date | string;

    @Field(() => String, {nullable:true})
    additionalNotes?: string;

    @Field(() => AtendeeCreateNestedOneWithoutEventInput, {nullable:true})
    Atendee?: AtendeeCreateNestedOneWithoutEventInput;

    @Field(() => UserCreateNestedOneWithoutEventInput, {nullable:true})
    User?: UserCreateNestedOneWithoutEventInput;
}
