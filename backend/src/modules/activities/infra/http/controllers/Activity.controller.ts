import {
  Controller,
  Post,
  Body,
  Request,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam } from '@nestjs/swagger';
import { Request as ResquestExpress } from 'express';

import InsertActivityDTO from '../dtos/InsertActivity.dto';
import InsertActivityService from '../../../services/InsertActivity.service';
import GetActivitiesService from '../../../services/GetActivities.service';
import DeleteActivityService from '../../../services/DeleteActivity.service';

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
