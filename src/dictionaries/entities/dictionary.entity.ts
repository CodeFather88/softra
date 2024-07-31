import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity('dictionaries')
export class DictionaryEntity {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number

	@Field()
	@CreateDateColumn()
	createdAt: Date

	@Field()
	@UpdateDateColumn()
	updatedAt: Date

	@Field({ nullable: true })
	@Column({ nullable: true })
	name: string
}