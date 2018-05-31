import { IAppState } from './../store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { select, NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [stagger(100, [animate('2s', style({ opacity: 0, color: 'red' }))])], { optional: true }),
        query(':enter', [style({ opacity: 0, color: 'green' }), stagger(100, [animate('2s', style({ opacity: 1 }))])], {
          optional: true,
        }),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  // You can directly listen to props in the state
  @select() data;

  constructor(private ngRedux: NgRedux<IAppState>) {
    // example state listener
    this.ngRedux.select('data').subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {}
}
