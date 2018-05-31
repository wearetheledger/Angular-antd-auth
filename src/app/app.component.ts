import { Component, ViewChild, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { select } from '@angular-redux/store';
import { AuthService } from './auth/auth.service';

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

  constructor(public authService: AuthService) {
    authService.handleAuthentication();

  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  ngOnInit() {}
}
