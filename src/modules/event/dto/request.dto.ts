import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateEventInput {
  @Field(() => Date, { nullable: false })
  date!: Date | string;

  @Field(() => Date, { nullable: false })
  time!: Date | string;

  @Field(() => String, { nullable: true })
  additionalNotes?: string;

  @Field()
  attendeeName: string;

  @Field()
  @IsEmail()
  attendeeEmail: string;
}
