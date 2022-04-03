import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventInput } from './user-create-without-event.input';
import { UserCreateOrConnectWithoutEventInput } from './user-create-or-connect-without-event.input';
import { UserUpsertWithoutEventInput } from './user-upsert-without-event.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutEventInput } from './user-update-without-event.input';

@InputType()
export class UserUpdateOneWithoutEventInput {

    @Field(() => UserCreateWithoutEventInput, {nullable:true})
    create?: UserCreateWithoutEventInput;

    @Field(() => UserCreateOrConnectWithoutEventInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutEventInput;

    @Field(() => UserUpsertWithoutEventInput, {nullable:true})
    upsert?: UserUpsertWithoutEventInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutEventInput, {nullable:true})
    update?: UserUpdateWithoutEventInput;
}
