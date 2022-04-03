import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesCreateInput } from './event-types-create.input';

@ArgsType()
export class CreateOneEventTypesArgs {

    @Field(() => EventTypesCreateInput, {nullable:false})
    data!: EventTypesCreateInput;
}
