import { Component, OnInit } from '@angular/core';
import { CarListService } from '../core/car-list.service';
import { Vehicle, VehicleDetails, VehicleCard } from '../core/car-list.models';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  error: any;
  vehicleList: Vehicle[];
  vehicleDetailList: VehicleDetails[];
  vehicleCardList: VehicleCard[];
  constructor(   private carListService: CarListService
    ) { }

  ngOnInit() {
    this.getVehicleList();
  }

  getVehicleList() {
    this.vehicleCardList = [];
    this.carListService.getVehicleList()
     .subscribe(
       (data: Vehicle[]) => {
         this.vehicleList = data;
         this.populateVehicleCardlList();
       },
       error => this.error = error
     );
   }

   populateVehicleCardlList() {
     for (const item of this.vehicleList) {
        this.getVehicleDetails(item);
     }
   }


   getVehicleDetails(item: Vehicle) {
    this.carListService.getVehicleDetails(item.id)
      .subscribe(
        (data: VehicleDetails) => {
          this.vehicleCardList.push({
            id: data.id,
            modelYear: item.modelYear,
            url: item.url,
            media: item.media,
            description: data.description,
            price: data.price,
            meta: data.meta
          });

        },
        error => this.error = error
      );
    }
}
