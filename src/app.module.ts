import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { DictionaryModule } from './dictionaries/dictionaries.module'


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      driver: ApolloDriver
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        username: 'admin',
        password: 'admin',
        database: 'softra',
        port: 5432,
        entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
        synchronize: true, //изменить на false
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    DictionaryModule,
  ],
  providers: [],
})
export class AppModule {
}