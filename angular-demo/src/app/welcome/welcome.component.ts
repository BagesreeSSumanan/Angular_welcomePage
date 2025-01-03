import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: false,
  
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  Welcome_message:string ="Welcome to Angular"
  image:string ="angular_icon.png"
  topics=['Setup Project','Create Component','Data Binding','Directives']
}
