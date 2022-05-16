import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // nextSlide() {
  //   setTimeout(function(){
  //     document.querySelectorAll(".active")[1]?.classList.add("fade-in");

  //   }, 700)
    
  // }
}
