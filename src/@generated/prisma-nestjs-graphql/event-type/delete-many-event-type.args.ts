import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeWhereInput } from './event-type-where.input';

@ArgsType()
export class DeleteManyEventTypeArgs {

    @Field(() => EventTypeWhereInput, {nullable:true})
    where?: EventTypeWhereInput;
}
