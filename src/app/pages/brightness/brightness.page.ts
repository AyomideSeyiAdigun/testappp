import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brightness',
  templateUrl: './brightness.page.html',
  styleUrls: ['./brightness.page.scss'],
})
export class BrightnessPage implements OnInit {
  min =0;
  max = 100;
  constructor() { }

  ngOnInit() {
  }

}
