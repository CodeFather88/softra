import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateDictionaryInput {

    @Field(() => String)
    name: string
}