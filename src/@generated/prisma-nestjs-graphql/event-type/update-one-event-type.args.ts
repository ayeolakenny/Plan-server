import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeUpdateInput } from './event-type-update.input';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';

@ArgsType()
export class UpdateOneEventTypeArgs {

    @Field(() => EventTypeUpdateInput, {nullable:false})
    data!: EventTypeUpdateInput;

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    where!: EventTypeWhereUniqueInput;
}
