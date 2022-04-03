import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventTypesScalarWhereInput } from './event-types-scalar-where.input';
import { EventTypesUpdateManyMutationInput } from './event-types-update-many-mutation.input';

@InputType()
export class EventTypesUpdateManyWithWhereWithoutUserInput {

    @Field(() => EventTypesScalarWhereInput, {nullable:false})
    where!: EventTypesScalarWhereInput;

    @Field(() => EventTypesUpdateManyMutationInput, {nullable:false})
    data!: EventTypesUpdateManyMutationInput;
}
