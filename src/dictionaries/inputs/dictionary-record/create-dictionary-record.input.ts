import { Field, InputType, Int } from '@nestjs/graphql'
import { DictionaryRecordColor } from '@shared/enums';

@InputType()
export class CreateDictionaryInput {

    @Field()
    name: string

    @Field()
    value: string

    @Field(() => DictionaryRecordColor)
    color: DictionaryRecordColor;

    @Field(() => Int)
    dictionaryId: number
}