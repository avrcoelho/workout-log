import { Controller, Post, Body } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

import AuthDTO from '../dtos/auth.dto';
import AuthService, { IResponse } from '../../../services/Auth.service';

@Controller('auth')
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({
    summary: 'Authentication',
    tags: ['Auth'],
  })
  @ApiBody({ type: AuthDTO })
  async show(@Body() body: AuthDTO): Promise<IResponse> {
    return await this.authService.execute(body);
  }
}

export default AuthController;
