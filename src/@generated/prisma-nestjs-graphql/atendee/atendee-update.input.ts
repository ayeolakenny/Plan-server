import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EventUpdateManyWithoutAtendeeInput } from '../event/event-update-many-without-atendee.input';

@InputType()
export class AtendeeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => EventUpdateManyWithoutAtendeeInput, {nullable:true})
    event?: EventUpdateManyWithoutAtendeeInput;
}
