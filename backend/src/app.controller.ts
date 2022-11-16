import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroesRateRequest } from './app.types';
import { PickerRequestBody } from './picker.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('picker')
  getPickerData(@Body() pickerRequestBody: PickerRequestBody) {
    return this.appService.getPickerData(pickerRequestBody)
  }
}
