import { lastValueFrom } from 'rxjs';
import { BusinessService } from '../Business.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements OnInit {
  message = "";
  constructor(
    private readonly businessService: BusinessService
  ){ }

   async ngOnInit() {
     await this.start();
  }

  async start() {
    this.message = await this.businessService.getMessage();
  }
}
