import { Controller, Get, Query } from "@nestjs/common";
import { GeolocationService } from "./geolocation.service";
import { Geolocation } from "./geolocation.interface";
import { AddressDto } from "../dto/address.dto";
import { AxiosResponse } from "axios";
import { lastValueFrom, map } from "rxjs";
import { HttpService } from "@nestjs/axios";

@Controller('rest/geolocation/v1')
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {
  }


  // @Get()
  // public findLocation(@Query() query: AddressDto): Promise<AxiosResponse<Geolocation[]>> {
  //   console.log(query.address);
  //   return this.geolocationService.findLocation(query.address);
  // }


  @Get('healthCheck')
  public async healthCheck() {
    const obj = await this.geolocationService.getEndpoint('https://catfact.ninja/fact');
    console.log(obj);
  }


}
