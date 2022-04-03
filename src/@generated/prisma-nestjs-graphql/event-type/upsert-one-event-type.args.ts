import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeWhereUniqueInput } from './event-type-where-unique.input';
import { EventTypeCreateInput } from './event-type-create.input';
import { EventTypeUpdateInput } from './event-type-update.input';

@ArgsType()
export class UpsertOneEventTypeArgs {

    @Field(() => EventTypeWhereUniqueInput, {nullable:false})
    where!: EventTypeWhereUniqueInput;

    @Field(() => EventTypeCreateInput, {nullable:false})
    create!: EventTypeCreateInput;

    @Field(() => EventTypeUpdateInput, {nullable:false})
    update!: EventTypeUpdateInput;
}
