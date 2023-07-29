import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class PorfolioComponent {

}
