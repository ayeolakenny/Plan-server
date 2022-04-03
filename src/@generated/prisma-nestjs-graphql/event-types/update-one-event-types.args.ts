import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesUpdateInput } from './event-types-update.input';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';

@ArgsType()
export class UpdateOneEventTypesArgs {

    @Field(() => EventTypesUpdateInput, {nullable:false})
    data!: EventTypesUpdateInput;

    @Field(() => EventTypesWhereUniqueInput, {nullable:false})
    where!: EventTypesWhereUniqueInput;
}
