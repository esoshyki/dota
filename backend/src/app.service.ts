import { Injectable } from '@nestjs/common';
import {
  ErrorResponse,
  HeroesRateRequest,
  HeroesRateResponse,
} from './app.types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getPickerData(
    requestData: HeroesRateRequest,
  ): Promise<HeroesRateResponse | ErrorResponse> {
    try {
      const result = await fetch('https://dotaix.xyz/api/picker', {
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
        body: JSON.stringify(requestData),
      });
      const data = (await result.json()) as HeroesRateResponse;
      return data;
    } catch (err: any) {
      return {
        error: 'Ошибка сервера',
      };
    }
  }
}
