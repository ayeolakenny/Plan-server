import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesUpdateManyMutationInput } from './event-types-update-many-mutation.input';
import { EventTypesWhereInput } from './event-types-where.input';

@ArgsType()
export class UpdateManyEventTypesArgs {

    @Field(() => EventTypesUpdateManyMutationInput, {nullable:false})
    data!: EventTypesUpdateManyMutationInput;

    @Field(() => EventTypesWhereInput, {nullable:true})
    where?: EventTypesWhereInput;
}
