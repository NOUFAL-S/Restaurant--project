import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  lat1 = 8.5241;
  lng1 = 76.9366;
  lat2 = 8.8932;
  lng2 = 76.6141;
  lat3 = 8.5932;
  lng3 = 76.9366;
  lat4 = 9.8932;
  lng4 = 76.3141;
  lat5 = 12.8932;
  lng5 = 75.2141;

  onChoseLocation(event) {
    console.log(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
