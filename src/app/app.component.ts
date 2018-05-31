import { Component, ViewChild, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  // private peers: string[] = [];
  private peersSubscription: Subscription;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  @select() data;

  constructor() {}

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  ngOnInit() {}
}
