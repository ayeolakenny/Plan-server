import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AtendeeCountAggregate } from './atendee-count-aggregate.output';
import { AtendeeAvgAggregate } from './atendee-avg-aggregate.output';
import { AtendeeSumAggregate } from './atendee-sum-aggregate.output';
import { AtendeeMinAggregate } from './atendee-min-aggregate.output';
import { AtendeeMaxAggregate } from './atendee-max-aggregate.output';

@ObjectType()
export class AggregateAtendee {

    @Field(() => AtendeeCountAggregate, {nullable:true})
    _count?: AtendeeCountAggregate;

    @Field(() => AtendeeAvgAggregate, {nullable:true})
    _avg?: AtendeeAvgAggregate;

    @Field(() => AtendeeSumAggregate, {nullable:true})
    _sum?: AtendeeSumAggregate;

    @Field(() => AtendeeMinAggregate, {nullable:true})
    _min?: AtendeeMinAggregate;

    @Field(() => AtendeeMaxAggregate, {nullable:true})
    _max?: AtendeeMaxAggregate;
}
