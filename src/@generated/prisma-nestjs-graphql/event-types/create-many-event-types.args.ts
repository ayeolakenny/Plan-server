import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypesCreateManyInput } from './event-types-create-many.input';

@ArgsType()
export class CreateManyEventTypesArgs {

    @Field(() => [EventTypesCreateManyInput], {nullable:false})
    data!: Array<EventTypesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
