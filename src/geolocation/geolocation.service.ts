import {  Injectable} from "@nestjs/common";
import { Geolocation } from "./geolocation.interface";
import axios, { AxiosError, AxiosResponse } from "axios";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom, lastValueFrom, map, Observable } from "rxjs";

@Injectable()
export class GeolocationService {
  constructor(private readonly httpService: HttpService) {}

  private geolocations: Array<Geolocation> = [];
  private gl1:Geolocation = {
    id:123,
    address:"Teststraße 1, 38126 Braunschweig",
    longitude:1.123,
    latitude:5.678
  }

  // public findLocation(address: string): Promise<AxiosResponse<Geolocation[]>> {
  //   return this.httpService.axiosRef.get('https://api3.geo.admin.ch/rest/services/api/SearchServer',{
  //     params: {
  //       searchText: address,
  //       type: 'locations',
  //       origins: 'address',
  //       limit: '10'
  //     },
  //     // headers: {
  //     //   'x-axa-security': 'x-123',
  //     // },
  //   });
  // }

  // public findLocation(address: string): Promise<AxiosResponse<Geolocation[]>> {
  //   this.httpService.axiosRef.get('https://api3.geo.admin.ch/rest/services/api/SearchServer',{
  //     params: {
  //       searchText: address,
  //       type: 'locations',
  //       origins: 'address',
  //       limit: '10'
  //     },
  //     headers: {
  //       'x-axa-security': 'x-123',
  //     },
  //   })
  //     .then((res) => {
  //       return res;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   return null;
  // }

  public getEndpoint(url): Promise<any> {
    return lastValueFrom(
      this.httpService.get<any>(url).pipe(
        map((res) => {
          return res.data;
        }),
      ),
    );
  }
}
