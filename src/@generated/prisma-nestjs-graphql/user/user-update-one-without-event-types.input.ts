import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventTypesInput } from './user-create-without-event-types.input';
import { UserCreateOrConnectWithoutEventTypesInput } from './user-create-or-connect-without-event-types.input';
import { UserUpsertWithoutEventTypesInput } from './user-upsert-without-event-types.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEventTypesInput } from './user-update-without-event-types.input';

@InputType()
export class UserUpdateOneWithoutEventTypesInput {

    @Field(() => UserCreateWithoutEventTypesInput, {nullable:true})
    create?: UserCreateWithoutEventTypesInput;

    @Field(() => UserCreateOrConnectWithoutEventTypesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEventTypesInput;

    @Field(() => UserUpsertWithoutEventTypesInput, {nullable:true})
    upsert?: UserUpsertWithoutEventTypesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEventTypesInput, {nullable:true})
    update?: UserUpdateWithoutEventTypesInput;
}
