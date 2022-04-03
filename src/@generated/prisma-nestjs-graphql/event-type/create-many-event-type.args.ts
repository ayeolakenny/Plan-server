import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventTypeCreateManyInput } from './event-type-create-many.input';

@ArgsType()
export class CreateManyEventTypeArgs {

    @Field(() => [EventTypeCreateManyInput], {nullable:false})
    data!: Array<EventTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
