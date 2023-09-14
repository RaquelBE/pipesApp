import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'raquel';
  public nameUpper: string = 'RAQUEL';
  public fullName: string = 'RaQuEl BlAzQuEz'

  public customDate: Date = new Date();
}
