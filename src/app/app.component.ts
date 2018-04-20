import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app/reducers';
import * as car from '../app/actions/car';
import { Car } from './models/cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {

    console.log('!!!!! About to load');
    const testCar: Car = {
      id: '1',
      make: 'Ford',
      model: 'F-150'
    };

    this.store.dispatch(new car.LoadAction(testCar));
  }
}
