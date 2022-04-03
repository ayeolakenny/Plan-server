import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventInput } from './user-create-without-event.input';
import { UserCreateOrConnectWithoutEventInput } from './user-create-or-connect-without-event.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEventInput {

    @Field(() => UserCreateWithoutEventInput, {nullable:true})
    create?: UserCreateWithoutEventInput;

    @Field(() => UserCreateOrConnectWithoutEventInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEventInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
