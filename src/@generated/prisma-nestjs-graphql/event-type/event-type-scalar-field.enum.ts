import { registerEnumType } from '@nestjs/graphql';

export enum EventTypeScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    length = "length",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(EventTypeScalarFieldEnum, { name: 'EventTypeScalarFieldEnum', description: undefined })
