import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { redis } from './redis';
import { ApolloDriver } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import { EventTypeModule } from './modules/event-type/event-type.module';
import { EventModule } from './modules/event/event.module';

dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      playground: true,
      debug: false,
      introspection: true,
      context: ({ req, res }) => ({ req, res, redis }),
      cors: {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
      },

      // formatError: (error: GraphQLError) => {
      //   const graphQLFormattedError = {
      //     code: error.extensions.code,
      //     error: error.extensions.response.error,
      //     message: error.extensions.response.message,
      //     status: error.extensions.response.statusCode,
      //   };

      //   return graphQLFormattedError;
      // },
    }),
    UserModule,
    EventModule,
    EventTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
