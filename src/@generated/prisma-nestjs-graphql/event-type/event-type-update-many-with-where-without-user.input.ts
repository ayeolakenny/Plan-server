import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypeScalarWhereInput } from './event-type-scalar-where.input';
import { EventTypeUpdateManyMutationInput } from './event-type-update-many-mutation.input';

@InputType()
export class EventTypeUpdateManyWithWhereWithoutUserInput {

    @Field(() => EventTypeScalarWhereInput, {nullable:false})
    where!: EventTypeScalarWhereInput;

    @Field(() => EventTypeUpdateManyMutationInput, {nullable:false})
    data!: EventTypeUpdateManyMutationInput;
}
