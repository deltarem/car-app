export interface Medium {
  name: string;
  url: string;
}

export interface Vehicle {
  id: string;
  modelYear: string;
  url: string;
  media: Medium[];
}

export interface Emissions {
  template: string;
  value: number;
}

export interface Meta {
  passengers: number;
  drivetrain: string[];
  bodystyles: string[];
  emissions: Emissions;
}

export interface VehicleDetails {
  id: string;
  description: string;
  price: string;
  meta: Meta;
}


export interface VehicleCard {
  id: string;
  modelYear: string;
  url: string;
  media: Medium[];
  description: string;
  price: string;
  meta: Meta;
  imageUrl: string;
}
