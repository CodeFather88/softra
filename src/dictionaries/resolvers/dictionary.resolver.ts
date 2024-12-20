import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { DictionaryService } from '../services/dictionary.service'
import { DictionaryEntity } from '../entities/dictionary.entity'
import { CreateDictionaryInput } from '../inputs/dictionary/create-dictionary.input'
import { UpdateDictionaryInput } from '../inputs/dictionary/update-dictionary.input'

@Resolver('Dictionary')
export class DictionaryResolver {
    constructor(
        private readonly dictionaryService: DictionaryService,
    ) {
    }

    @Mutation(() => DictionaryEntity)
    async createDictionary(@Args('createDictionary') createDictionaryInput: CreateDictionaryInput): Promise<DictionaryEntity> {
        return await this.dictionaryService.createDictionary(createDictionaryInput)
    }

    @Mutation(() => DictionaryEntity)
    async updateDictionary(@Args('updateDictionary') updateDictionaryInput: UpdateDictionaryInput): Promise<DictionaryEntity> {
        return await this.dictionaryService.updateDictionary(updateDictionaryInput)
    }

    @Mutation(() => Number)
    async removeDictionary(@Args('id') id: number): Promise<number> {
        return await this.dictionaryService.removeDictionary(id)
    }

    @Query(() => DictionaryEntity)
    async getOneDictionary(@Args('id') id: number): Promise<DictionaryEntity> {
        return await this.dictionaryService.getOneDictionary(id)
    }

    @Query(() => [DictionaryEntity])
    async getAllDictionaries(): Promise<DictionaryEntity[]> {
        return await this.dictionaryService.getAllDictionaries()
    }
}