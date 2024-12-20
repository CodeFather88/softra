import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DictionaryRecordService } from '../services/dictionary-record.service';
import { DictionaryRecordEntity } from '../entities/dictionary-record.entity';
import { CreateDictionaryRecordInput } from '../inputs/dictionary-record/create-dictionary-record.input';
import { UpdateDictionaryRecordInput } from '../inputs/dictionary-record/update-dictionary-record.input';

@Resolver('DictionaryRecord')
export class DictionaryRecordResolver {
    constructor(
        private readonly dictionaryRecordService: DictionaryRecordService,
    ) {}

    @Mutation(() => DictionaryRecordEntity)
    async createDictionaryRecord(@Args('createDictionaryRecordInput') createDictionaryRecordInput: CreateDictionaryRecordInput): Promise<DictionaryRecordEntity> {
        return await this.dictionaryRecordService.createDictionaryRecord(createDictionaryRecordInput);
    }

    @Mutation(() => DictionaryRecordEntity)
    async updateDictionaryRecord(@Args('createDictionaryRecordInput') updateDictionaryRecordInput: UpdateDictionaryRecordInput): Promise<DictionaryRecordEntity> {
        return await this.dictionaryRecordService.updateDictionaryRecord(updateDictionaryRecordInput);
    }

    @Mutation(() => Number)
    async removeDictionaryRecord(@Args('id') id: number): Promise<number> {
        return await this.dictionaryRecordService.removeDictionaryRecord(id);
    }

    @Query(() => DictionaryRecordEntity)
    async getOneDictionaryRecord(@Args('id') id: number): Promise<DictionaryRecordEntity> {
        return await this.dictionaryRecordService.getOneDictionaryRecord(id);
    }

    @Query(() => [DictionaryRecordEntity])
    async getAllDictionaryRecords(@Args('dictionaryId') dictionaryId: number): Promise<DictionaryRecordEntity[]> {
        return await this.dictionaryRecordService.getAllDictionaryRecords(dictionaryId);
    }
}
