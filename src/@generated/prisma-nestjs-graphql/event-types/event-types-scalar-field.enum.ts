import { registerEnumType } from '@nestjs/graphql';

export enum EventTypesScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    length = "length",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EventTypesScalarFieldEnum, { name: 'EventTypesScalarFieldEnum', description: undefined })
