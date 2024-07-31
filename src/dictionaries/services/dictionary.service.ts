import { Injectable } from "@nestjs/common";
import { DictionaryEntity } from "../entities/dictionary.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateDictionaryInput } from "../inputs/dictionary/create-dictionary.input";

@Injectable()
export class DictionaryService {
    constructor(
        @InjectRepository(DictionaryEntity)
        private readonly dictionaryRepository: Repository<DictionaryEntity>,
    ) { }

    async createDictionary(createUserInput: CreateDictionaryInput): Promise<DictionaryEntity> {
        const result = await this.dictionaryRepository.save({ ...createUserInput })
        console.log({ result })
        return result
    }

    async getOneDictionary(id: number): Promise<DictionaryEntity> {
        return await this.dictionaryRepository.findOne({ where: { id } })
    }

    async getAllDictionaries(): Promise<DictionaryEntity[]> {
        return await this.dictionaryRepository.find()
    }

    async removeDictionary(id: number): Promise<number> {
        await this.dictionaryRepository.delete({ id })
        return id
    }


}