import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCreateInput } from './event-type-create.input';

@ArgsType()
export class CreateOneEventTypeArgs {

    @Field(() => EventTypeCreateInput, {nullable:false})
    data!: EventTypeCreateInput;
}
