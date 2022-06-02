import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-insomnia',
  templateUrl: './insomnia.page.html',
  styleUrls: ['./insomnia.page.scss'],
})
export class InsomniaPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public isOnline: boolean = false;

  // constructor(private insomniaUtilService : InsomniaUtilService ) { }

  ngOnInit() {
  }


  // updateDriverOnlineStatus($event) {
  //   this.isOnline = !this.isOnline;
  //   console.log(this.isOnline);
  //   if (this.isOnline){
  //     this.insomniaUtilService.enable();
  //   }else{
  //     this.insomniaUtilService.disable();
  //   }
  // }


}
