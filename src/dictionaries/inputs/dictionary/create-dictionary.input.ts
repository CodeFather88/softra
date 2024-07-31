import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateDictionaryInput {
    
    @Field({ nullable: true })
    name: string
}