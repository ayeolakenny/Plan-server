import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateManyUserInput } from './event-create-many-user.input';

@InputType()
export class EventCreateManyUserInputEnvelope {

    @Field(() => [EventCreateManyUserInput], {nullable:false})
    data!: Array<EventCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
