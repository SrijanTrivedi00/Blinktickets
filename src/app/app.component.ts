import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { ExporeeventsComponent } from "./exporeevents/exporeevents.component";
import { Route } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { MostpopularComponent } from './mostpopular/mostpopular.component';
import { FfooterComponent } from './ffooter/ffooter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrendingComponent, SpotlightComponent,ExporeeventsComponent,MostpopularComponent,FfooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blinktickets';
}
