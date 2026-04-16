import {
  IsNotEmpty,
  Length,
  IsString,
  isNotEmpty,
  IsNumber,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @Length(0, 100)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  offerPrice: number;

  @IsNotEmpty()
  @IsString()
  @Length(0, 255)
  shortDescription: string;

  @IsNotEmpty()
  @IsString()
  longDescription: string;

  @IsNumber()
  @IsInt()
  quantity: number;

  @IsNumber()
  @IsInt()
  categoryId: number;
}
