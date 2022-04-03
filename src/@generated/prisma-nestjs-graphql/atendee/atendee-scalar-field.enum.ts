import { registerEnumType } from '@nestjs/graphql';

export enum AtendeeScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email"
}


registerEnumType(AtendeeScalarFieldEnum, { name: 'AtendeeScalarFieldEnum', description: undefined })
