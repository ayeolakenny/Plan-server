import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@ArgsType()
export class DeleteOneEventTypeArgs {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    where!: EventTypeWhereUniqueInput;
}
