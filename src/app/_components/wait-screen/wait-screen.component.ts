import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wait-screen',
  templateUrl: './wait-screen.component.html',
  styleUrls: ['./wait-screen.component.scss']
})
export class WaitScreenComponent implements OnInit {
  @Input() text!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
