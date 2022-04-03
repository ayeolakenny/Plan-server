import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesWhereUniqueInput } from './event-types-where-unique.input';

@ArgsType()
export class DeleteOneEventTypesArgs {

    @Field(() => EventTypesWhereUniqueInput, {nullable:false})
    where!: EventTypesWhereUniqueInput;
}
