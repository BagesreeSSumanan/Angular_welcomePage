import { Component } from '@angular/core';

@Component({
  selector: 'textbox',
  standalone: false,
  
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css'
})
export class TextboxComponent {
  textvalue: string ="Start Learing"
}
