import { Field, ID, InputType, Int, registerEnumType } from '@nestjs/graphql';
import { DictionaryRecordColor } from '@shared/enums';

@InputType()
export class UpdateDictionaryRecordInput {
    @Field(()=>ID)
    id: number

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    value?: string;

    @Field(() => DictionaryRecordColor, { nullable: true })
    color?: DictionaryRecordColor;

}

registerEnumType(DictionaryRecordColor, {
    name: 'DictionaryRecordColor',
    description: 'Цвет записи в словаре'
});
