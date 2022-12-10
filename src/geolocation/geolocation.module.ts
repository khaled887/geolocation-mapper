import { Module } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { GeolocationController } from './geolocation.controller';

@Module({
  providers: [GeolocationService],
  controllers: [GeolocationController],
  exports: [GeolocationService],
})
export class GeolocationModule {}
