import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Request as ResquestExpress } from 'express';

import JwtAuthGuard from '@shared/infra/http/guards/jwt-auth.guard';
import InsertActivityDTO from '../dtos/InsertActivity.dto';
import InsertActivityService from '../../../services/InsertActivity.service';
import GetActivitiesService from '../../../services/GetActivities.service';
import DeleteActivityService from '../../../services/DeleteActivity.service';

@UseGuards(JwtAuthGuard)
@Controller('activities')
class ActivityController {
  constructor(
    private readonly insertActivityService: InsertActivityService,
    private readonly getActivitiesService: GetActivitiesService,
    private readonly deleteActivityService: DeleteActivityService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get user activities',
    tags: ['Activities'],
  })
  @ApiBearerAuth('access-token')
  async index(@Request() request: ResquestExpress) {
    const user_id = request.user.id;

    const activities = await this.getActivitiesService.execute(user_id);

    return activities;
  }

  @Post()
  @ApiOperation({
    summary: 'Insert activity to user',
    tags: ['Activities'],
  })
  @ApiBearerAuth('access-token')
  @ApiBody({ type: InsertActivityDTO })
  async create(
    @Body() body: InsertActivityDTO,
    @Request() request: ResquestExpress,
  ) {
    const { time, type, date } = body;
    const user_id = request.user.id;

    const activity = await this.insertActivityService.execute({
      user_id,
      time,
      type,
      date,
    });

    return activity;
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete activity',
    tags: ['Activities'],
  })
  @ApiBearerAuth('access-token')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  async delete(@Param() params: { id: string }) {
    const { id } = params;

    const activities = await this.deleteActivityService.execute(id);

    return activities;
  }
}

export default ActivityController;
