import { Module } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { GeolocationController } from './geolocation.controller';
import { HttpModule } from "@nestjs/axios";

@Module({
  providers: [GeolocationService],
  controllers: [GeolocationController],
  exports: [GeolocationService],
  imports: [HttpModule]
})
export class GeolocationModule {}
