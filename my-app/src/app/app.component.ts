import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  Rmessage: string;
  Bmessage: string;
  Smessage: string;
  subscription: Subscription;
  
  constructor(public messageService: HeroService) { }
  
  ngOnInit() {
    this.subscription = this.messageService.Smessage.subscribe(
      (message) => {
        this.Smessage = message;
      }
    );
    this.subscription = this.messageService.Bmessage.subscribe(
      (message) => {
        this.Bmessage = message;
      }
    );
    this.subscription = this.messageService.Rmessage.subscribe(
      (message) => {
        this.Rmessage = message;
      }
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

