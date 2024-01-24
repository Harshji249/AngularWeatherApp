import { Component, NgModule , Input} from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClientModule } from '@angular/common/http';
import { Data } from '../Data';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  @Input() FinalData: any;
  constructor(private weatherService: WeatherService) {}
  
}
