import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutEventInput } from '../user/user-create-nested-one-without-event.input';

@InputType()
export class EventCreateWithoutAtendeeInput {

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:false})
    time!: Date | string;

    @Field(() => String, {nullable:true})
    additionalNotes?: string;

    @Field(() => UserCreateNestedOneWithoutEventInput, {nullable:true})
    User?: UserCreateNestedOneWithoutEventInput;
}
