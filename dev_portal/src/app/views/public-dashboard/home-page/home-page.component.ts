import { Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

//   ngOnInit(): void {
//   console.log('HomePageComponent loaded');
// }

 popupLogin: boolean = false;
  popupRegister: boolean = false;

  openLogin() {
    this.popupLogin = true;
  }

  closeLogin() {
    this.popupLogin = false;
  }

  openRegister() {
    this.popupRegister = true;
  }

  closeRegister() {
    this.popupRegister = false;
  }


}
