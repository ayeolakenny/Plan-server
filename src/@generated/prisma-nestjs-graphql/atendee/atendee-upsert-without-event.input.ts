import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AtendeeUpdateWithoutEventInput } from './atendee-update-without-event.input';
import { AtendeeCreateWithoutEventInput } from './atendee-create-without-event.input';

@InputType()
export class AtendeeUpsertWithoutEventInput {

    @Field(() => AtendeeUpdateWithoutEventInput, {nullable:false})
    update!: AtendeeUpdateWithoutEventInput;

    @Field(() => AtendeeCreateWithoutEventInput, {nullable:false})
    create!: AtendeeCreateWithoutEventInput;
}
