import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DictionaryEntity } from './dictionary.entity';
import { DictionaryRecordColor } from '@shared/enums';

@ObjectType()
@Entity('dictionary_records')
export class DictionaryRecordEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@CreateDateColumn()
	createdAt: Date;

	@Field()
	@UpdateDateColumn()
	updatedAt: Date;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	value: string;

	@Field(() => DictionaryRecordColor)
	@Column({
		type: 'enum',
		enum: DictionaryRecordColor,
	})
	color: DictionaryRecordColor;

	@ManyToOne(() => DictionaryEntity, dictionary => dictionary.records, { onDelete: 'CASCADE' })
	dictionary: DictionaryEntity;
}
