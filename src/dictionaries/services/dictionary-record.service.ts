import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DictionaryRecordEntity } from "../entities/dictionary-record.entity";
import { Repository } from "typeorm";
import { CreateDictionaryRecordInput } from "../inputs/dictionary-record/create-dictionary-record.input";

@Injectable()
export class DictionaryRecordService {
    constructor(
        @InjectRepository(DictionaryRecordEntity)
        private readonly dictionaryRecordRepository: Repository<DictionaryRecordEntity>,
    ) { }

    async createDictionaryRecord(createDictionaryRecordInput: CreateDictionaryRecordInput): Promise<DictionaryRecordEntity> {
        return await this.dictionaryRecordRepository.save({ ...createDictionaryRecordInput })
    }

    async getOneDictionaryRecord(id: number): Promise<DictionaryRecordEntity> {
        return await this.dictionaryRecordRepository.findOne({ where: { id } })
    }

    async getAllDictionaryRecords(dictionaryId: number): Promise<DictionaryRecordEntity[]> {
        return await this.dictionaryRecordRepository.find({
            where: {
                dictionary: {
                    id: dictionaryId
                }
            }
        })
    }

    async removeDictionaryRecord(id: number): Promise<number> {
        await this.dictionaryRecordRepository.delete({ id })
        return id
    }
}