import { ApiProperty } from '@nestjs/swagger';

// DTO or Data Transfer Objects
// defines how data will be sent over the network

export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
