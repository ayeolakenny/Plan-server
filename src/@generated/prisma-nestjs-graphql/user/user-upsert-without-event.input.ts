import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutEventInput } from './user-update-without-event.input';
import { UserCreateWithoutEventInput } from './user-create-without-event.input';

@InputType()
export class UserUpsertWithoutEventInput {

    @Field(() => UserUpdateWithoutEventInput, {nullable:false})
    update!: UserUpdateWithoutEventInput;

    @Field(() => UserCreateWithoutEventInput, {nullable:false})
    create!: UserCreateWithoutEventInput;
}
