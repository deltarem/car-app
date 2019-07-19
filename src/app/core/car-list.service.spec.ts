import { TestBed } from '@angular/core/testing';

import { CarListService } from './car-list.service';
import { Vehicle } from './car-list.models';

describe('CarListService', () => {

  let service: CarListService;
  beforeEach(() => { service = new CarListService(); });

  it('vehiclesApiUrl should return real value', () => {
    expect(service.vehiclesApiUrl).toBe('https://itg-prd-recruit.appspot.com/api/vehicles/');
  });

  it('vehicleApiUrl should return real value', () => {
    expect(service.vehicleApiUrl).toBe('https://itg-prd-recruit.appspot.com/api/vehicle/');
  });


  it('getVehicleList() item list should return value from observable',
    (done: DoneFn) => {
    service.getVehicleList().subscribe((value: Vehicle[])  => {
      expect(value.length).toBe(5);
      done();
    });
  });


});
