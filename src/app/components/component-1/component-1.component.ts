import { lastValueFrom } from 'rxjs';
import { BussinessService } from './../BussinessService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements OnInit {
  message = "";
  constructor(
    private readonly bussinessService: BussinessService
  ){ }

   async ngOnInit() {
     await this.start();
  }
  
  async start() {
    this.message = await this.bussinessService.getMessage();
  }

}
