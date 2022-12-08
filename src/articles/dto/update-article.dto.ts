import { PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

// PartialType - all fields are not required
export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
