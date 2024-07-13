import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ghc_website';
  currentTime  = this.datePipe.transform(new Date(), 'HH:mm');
  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.updateCurrentTime();
    console.log(this.currentTime);
  }
  
  updateCurrentTime() {
    let time = this.datePipe.transform(new Date(), 'HH:mm');
    this.currentTime=time;
    setInterval(() => this.currentTime = this.datePipe.transform(new Date(), 'HH:mm:ss'), 60000);
  }
}
