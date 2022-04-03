import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyAtendeeInput } from './event-create-many-atendee.input';

@InputType()
export class EventCreateManyAtendeeInputEnvelope {

    @Field(() => [EventCreateManyAtendeeInput], {nullable:false})
    data!: Array<EventCreateManyAtendeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
