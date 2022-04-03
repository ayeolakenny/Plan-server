import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypesCreateManyUserInput } from './event-types-create-many-user.input';

@InputType()
export class EventTypesCreateManyUserInputEnvelope {

    @Field(() => [EventTypesCreateManyUserInput], {nullable:false})
    data!: Array<EventTypesCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
