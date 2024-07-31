import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictionaryEntity } from './entities/dictionary.entity';
import { DictionaryResolver } from './resolvers/user.resolver';
import { DictionaryService } from './services/dictionary.service';

@Module({
	imports: [ TypeOrmModule.forFeature([ DictionaryEntity ]) ],
	providers: [ 
        DictionaryService, 
        DictionaryResolver 
    ],
})
export class DictionaryModule {}
