import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { CarListService } from './car-list.service';
import { Vehicle } from './car-list.models';

describe('CarListService', () => {

  let httpTestingController: HttpTestingController;
  let service: CarListService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarListService],
      imports: [HttpClientTestingModule]
    });

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CarListService);

    expect(service.vehiclesApiUrl).toBe('https://itg-prd-recruit.appspot.com/api/vehicles/');

    expect(service.vehicleApiUrl).toBe('https://itg-prd-recruit.appspot.com/api/vehicle/');

    service.getVehicleList().subscribe((value: Vehicle[])  => {
        expect(value.length).toBe(5);
      });

  });
});
