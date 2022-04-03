import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesWhereInput } from './event-types-where.input';

@ArgsType()
export class DeleteManyEventTypesArgs {

    @Field(() => EventTypesWhereInput, {nullable:true})
    where?: EventTypesWhereInput;
}
