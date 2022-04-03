import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEventTypesInput } from './user-update-without-event-types.input';
import { UserCreateWithoutEventTypesInput } from './user-create-without-event-types.input';

@InputType()
export class UserUpsertWithoutEventTypesInput {

    @Field(() => UserUpdateWithoutEventTypesInput, {nullable:false})
    update!: UserUpdateWithoutEventTypesInput;

    @Field(() => UserCreateWithoutEventTypesInput, {nullable:false})
    create!: UserCreateWithoutEventTypesInput;
}
