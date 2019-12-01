import { Body, Controller, Get, Headers, Param, Post, Query, Req } from '@nestjs/common';
import { CreatePostDto } from './post.dto';

@Controller('posts')
export class PostsController {
  @Get()
  index(@Req() request, @Query() query, @Headers() header) {
    console.log(query.id);
    console.log(query.name);
    console.log(header);
    return 'posts';
  }

  @Get(':id')
  item(@Param() params) {
    return {
      title: params.id,
    };
  }
  @Post()
  store(@Body() post: CreatePostDto){
    console.log(post);
  }
}
