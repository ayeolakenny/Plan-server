import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AtendeeUpdateOneWithoutEventInput } from '../atendee/atendee-update-one-without-event.input';

@InputType()
export class EventUpdateWithoutUserInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    time?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    additionalNotes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AtendeeUpdateOneWithoutEventInput, {nullable:true})
    Atendee?: AtendeeUpdateOneWithoutEventInput;
}
