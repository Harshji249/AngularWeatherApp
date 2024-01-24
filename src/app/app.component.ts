import {
  Component,
  Output,
  EventEmitter,
  SimpleChanges,
  Input,
  NgModule,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    WeatherComponent,
    HttpClientModule,
    WeatherComponent
  ],
  providers: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private weatherService: WeatherService) {}
  FinalData:any
  search: string;
  @Output() city: EventEmitter<string> = new EventEmitter();
  OnSubmit() {
    this.weatherService.getWeather(this.search).then((res: any) => {
      this.FinalData = res.data
      console.log("DATA FROM APP COMPONENT",res.data);
    }).catch((err:Error)=>{
      console.log(err)
    })
  }
  title = 'WeatherApp';
}
