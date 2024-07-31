import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DictionaryRecordEntity } from './dictionary-record.entity';

@ObjectType()
@Entity('dictionaries')
export class DictionaryEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;

	@Field({ nullable: true })
	@Column({ nullable: true })
	name: string;

	@Field(() => [DictionaryRecordEntity], { nullable: true })
	@OneToMany(() => DictionaryRecordEntity, record => record.dictionary, { cascade: true, onDelete: 'CASCADE' })
	records: DictionaryRecordEntity[];
}
