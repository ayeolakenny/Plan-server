import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
    id = "id",
    date = "date",
    time = "time",
    additionalNotes = "additionalNotes",
    atendeeId = "atendeeId",
    userId = "userId"
}


registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })
