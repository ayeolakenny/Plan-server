import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeCreateManyUserInput } from './event-type-create-many-user.input';

@InputType()
export class EventTypeCreateManyUserInputEnvelope {

    @Field(() => [EventTypeCreateManyUserInput], {nullable:false})
    data!: Array<EventTypeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
