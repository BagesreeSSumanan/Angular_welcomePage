import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: false,
  
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})

export class ToggleComponent {
  isHighlighted  : boolean = false;
  togglehighlight(){
    this.isHighlighted = true;
  }
}
