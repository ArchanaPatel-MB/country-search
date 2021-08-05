import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countrySerach';

  
  myFunction() {
    let element=document.querySelector('html')!
   element.classList.toggle("dark-mode");

  }
}
