import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutEventInput } from './user-create-without-event.input';

@InputType()
export class UserCreateOrConnectWithoutEventInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEventInput, {nullable:false})
    create!: UserCreateWithoutEventInput;
}
