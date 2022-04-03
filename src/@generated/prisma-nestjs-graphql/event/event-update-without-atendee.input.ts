import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneWithoutEventInput } from '../user/user-update-one-without-event.input';

@InputType()
export class EventUpdateWithoutAtendeeInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    additionalNotes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutEventInput, {nullable:true})
    User?: UserUpdateOneWithoutEventInput;
}
