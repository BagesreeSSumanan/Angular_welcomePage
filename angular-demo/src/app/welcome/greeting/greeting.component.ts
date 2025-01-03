import { Component,Input } from '@angular/core';

@Component({
  selector: 'greeting',
  standalone: false,
  
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  @Input() Message!: boolean;
}
