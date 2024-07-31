import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DictionaryRecordEntity } from "../entities/dictionary-record.entity";
import { Repository } from "typeorm";
import { CreateDictionaryRecordInput } from "../inputs/dictionary-record/create-dictionary-record.input";
import { DictionaryEntity } from "../entities/dictionary.entity";
import { UpdateDictionaryRecordInput } from "../inputs/dictionary-record/update-dictionary-record.input";

@Injectable()
export class DictionaryRecordService {
    constructor(
        @InjectRepository(DictionaryRecordEntity)
        private readonly dictionaryRecordRepository: Repository<DictionaryRecordEntity>,
        @InjectRepository(DictionaryEntity)
        private readonly dictionaryRepository: Repository<DictionaryEntity>,
    ) { }

    async createDictionaryRecord(createDictionaryRecordInput: CreateDictionaryRecordInput): Promise<DictionaryRecordEntity> {
        const dictionary = await this.dictionaryRepository.findOne({ where: { id: createDictionaryRecordInput.dictionaryId } });
        if (!dictionary) {
            throw new NotFoundException(`Dictionary with ID ${createDictionaryRecordInput.dictionaryId} not found`);
        }

        const dictionaryRecord = this.dictionaryRecordRepository.create({
            ...createDictionaryRecordInput,
            dictionary,
        });

        return this.dictionaryRecordRepository.save(dictionaryRecord);
    }

    async updateDictionaryRecord(updateDictionaryRecordInput: UpdateDictionaryRecordInput): Promise<DictionaryRecordEntity> {
        const result = await this.dictionaryRecordRepository.update(updateDictionaryRecordInput.id, updateDictionaryRecordInput);
        if (result.affected === 0) {
            throw new NotFoundException(`Dictionary Record with ID ${updateDictionaryRecordInput.id} not found`);
        }
        return this.dictionaryRecordRepository.findOne({ where: { id: updateDictionaryRecordInput.id } });
    }

    async getOneDictionaryRecord(id: number): Promise<DictionaryRecordEntity> {
        return await this.dictionaryRecordRepository.findOne({ where: { id } })
    }

    async getAllDictionaryRecords(dictionaryId: number): Promise<DictionaryRecordEntity[]> {
        return await this.dictionaryRecordRepository.find({ where: { dictionary: { id: dictionaryId } }, relations: ['dictionary'] });
    }

    async removeDictionaryRecord(id: number): Promise<number> {
        await this.dictionaryRecordRepository.delete({ id })
        return id
    }
}