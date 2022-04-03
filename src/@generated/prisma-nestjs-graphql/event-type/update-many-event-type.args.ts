import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeUpdateManyMutationInput } from './event-type-update-many-mutation.input';
import { EventTypeWhereInput } from './event-type-where.input';

@ArgsType()
export class UpdateManyEventTypeArgs {

    @Field(() => EventTypeUpdateManyMutationInput, {nullable:false})
    data!: EventTypeUpdateManyMutationInput;

    @Field(() => EventTypeWhereInput, {nullable:true})
    where?: EventTypeWhereInput;
}
