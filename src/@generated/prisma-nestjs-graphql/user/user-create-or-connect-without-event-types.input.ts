import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutEventTypesInput } from './user-create-without-event-types.input';

@InputType()
export class UserCreateOrConnectWithoutEventTypesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutEventTypesInput, {nullable:false})
    create!: UserCreateWithoutEventTypesInput;
}
