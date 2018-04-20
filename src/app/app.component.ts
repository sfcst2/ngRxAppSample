import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app/reducers';
import * as car from '../app/actions/car';
import { Car } from './models/cars';
import { State } from '../app/reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    const testCar: Car = {
      id: '1',
      make: 'Ford',
      model: 'F-150'
    };

    this.store.dispatch(new car.LoadAction(testCar));
  }

  clickedGetCars(): void {
    this.store.select(fromRoot.getCarIds).forEach(carId => {
      console.log('Car value id is  ' + carId);
    });
  }
}
