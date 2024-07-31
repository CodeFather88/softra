import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictionaryEntity } from './entities/dictionary.entity';
import { DictionaryResolver } from './resolvers/dictionary.resolver';
import { DictionaryService } from './services/dictionary.service';
import { DictionaryRecordService } from './services/dictionary-record.service';
import { DictionaryRecordResolver } from './resolvers/dictionary-record.resolver';
import { DictionaryRecordEntity } from './entities/dictionary-record.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ DictionaryEntity, DictionaryRecordEntity ]) ],
	providers: [ 
        DictionaryService, 
        DictionaryResolver,
        DictionaryRecordService,
        DictionaryRecordResolver
    ],
})
export class DictionaryModule {}
