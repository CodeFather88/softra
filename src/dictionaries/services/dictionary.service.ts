import { Injectable, NotFoundException } from "@nestjs/common";
import { DictionaryEntity } from "../entities/dictionary.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateDictionaryInput } from "../inputs/dictionary/create-dictionary.input";
import { UpdateDictionaryInput } from "../inputs/dictionary/update-dictionary.input";
import { error } from "console";

@Injectable()
export class DictionaryService {
    constructor(
        @InjectRepository(DictionaryEntity)
        private readonly dictionaryRepository: Repository<DictionaryEntity>,
    ) { }

    async createDictionary(createDictionaryInput: CreateDictionaryInput): Promise<DictionaryEntity> {
        return await this.dictionaryRepository.save({ ...createDictionaryInput })
    }

    async updateDictionary(updateDictionaryInput: UpdateDictionaryInput): Promise<DictionaryEntity> {
        const result = await this.dictionaryRepository.update(updateDictionaryInput.id, updateDictionaryInput);
        if (result.affected === 0) {
            throw new NotFoundException(`Dictionary with ID ${updateDictionaryInput.id} not found`);
        }
        return this.dictionaryRepository.findOne({ where: { id: updateDictionaryInput.id } });
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