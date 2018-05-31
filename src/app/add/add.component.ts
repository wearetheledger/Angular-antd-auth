import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_DATA } from '../actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  newItem = 0;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {}

  addOne() {
    this.ngRedux.dispatch({ type: ADD_DATA, data: this.newItem });
  }
}
