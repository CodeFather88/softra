import { Field, ID, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateDictionaryInput {

    @Field(() => String)
    name: string

    @Field(() => ID)
    id: number
}