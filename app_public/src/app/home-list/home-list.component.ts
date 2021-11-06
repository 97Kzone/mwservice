import { Component, OnInit } from '@angular/core';

export class Location {
  _id!: string;
  name!: string;
  distance!: number;
  address!: string;
  rating!: number;
  facilities!: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {

  constructor() { }

  name = "Burger Queen";

  locations: Location[] = [{
    _id: '617380307aabf9185244469a',
    name: 'Burger Queen',
    distance: 1100.0,
    address: '고양시 일산동구 마두동 일산로 206',
    rating: 4,
    facilities: ['Cool drinks', 'Food', 'Premium wifi']
  }, {
    _id: '61737ea7e27f0263df3e3ce0',
    name: 'Star Cups',
    distance: 370.0,
    address: '고양시 일산동구 마두동 일산로 206',
    rating: 5,
    facilities: ['drinks', 'food', 'Premium wifi']
  }];

  ngOnInit(): void {
  }

}
