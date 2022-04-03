import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EventUncheckedUpdateManyWithoutAtendeeInput } from '../event/event-unchecked-update-many-without-atendee.input';

@InputType()
export class AtendeeUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => EventUncheckedUpdateManyWithoutAtendeeInput, {nullable:true})
    event?: EventUncheckedUpdateManyWithoutAtendeeInput;
}
