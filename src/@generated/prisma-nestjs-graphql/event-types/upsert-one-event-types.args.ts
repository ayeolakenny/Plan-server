import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';
import { EventTypesCreateInput } from './event-types-create.input';
import { EventTypesUpdateInput } from './event-types-update.input';

@ArgsType()
export class UpsertOneEventTypesArgs {

    @Field(() => EventTypesWhereUniqueInput, {nullable:false})
    where!: EventTypesWhereUniqueInput;

    @Field(() => EventTypesCreateInput, {nullable:false})
    create!: EventTypesCreateInput;

    @Field(() => EventTypesUpdateInput, {nullable:false})
    update!: EventTypesUpdateInput;
}
