import { Field, InputType, Int } from '@nestjs/graphql'
import { DictionaryRecordColor } from '@shared/enums';

@InputType()
export class CreateDictionaryRecordInput {

    @Field(() => String)
    name: string

    @Field(() => String)
    value: string

    @Field(() => DictionaryRecordColor)
    color: DictionaryRecordColor;

    @Field(() => Int)
    dictionaryId: number
}