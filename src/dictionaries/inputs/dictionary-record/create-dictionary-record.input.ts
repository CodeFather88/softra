import { Field, ID, InputType, Int, registerEnumType } from '@nestjs/graphql'
import { DictionaryRecordColor } from '@shared/enums';

@InputType()
export class CreateDictionaryRecordInput {

    @Field(() => String)
    name: string

    @Field(() => String)
    value: string

    @Field(() => DictionaryRecordColor)
    color: DictionaryRecordColor;

    @Field(() => ID)
    dictionaryId: number
}

registerEnumType(DictionaryRecordColor, {
    name: 'DictionaryRecordColor',
    description: 'Цвет записи в словаре'
});