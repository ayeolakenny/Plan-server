import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventTypesInput } from './user-create-without-event-types.input';
import { UserCreateOrConnectWithoutEventTypesInput } from './user-create-or-connect-without-event-types.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEventTypesInput {

    @Field(() => UserCreateWithoutEventTypesInput, {nullable:true})
    create?: UserCreateWithoutEventTypesInput;

    @Field(() => UserCreateOrConnectWithoutEventTypesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEventTypesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
