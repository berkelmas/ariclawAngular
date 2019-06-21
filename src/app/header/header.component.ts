import { Component, OnInit, HostListener, ViewChild, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('changeMenu', [
      state('opened', style({
        opacity : 1
      })),
      state('closed', style({
        opacity : 0,
        transform: 'translateX(-900px)'
      })),
      transition('closed => opened', animate('0.5s')),
      transition('opened => closed', animate('0.5s'))
    ]),

    trigger('makeSticky', [
      state('notSticky', style({position: 'absolute'})),
      state('yesSticky', style({position: 'fixed', 'background-color' : 'white', 'box-shadow' : '0px 10px 15px rgba(0, 0, 0, 0.05)'})),
      transition('yesSticky => notSticky', animate('.8s')),
      transition('notSticky => yesSticky', animate('.8s'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  menuStatus: boolean = false;
  stickyStatus: boolean = false;
  innerWidth: number;

  // handles the animation with the screen width...
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth > 900 ) {
        this.menuStatus = true;
      }
    }

  @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
      if (window.pageYOffset > 150) {
        this.stickyStatus = true;
      } else {
        this.stickyStatus = false;
      }
    }



  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 900 ) {
      this.menuStatus = true;
    }
  }

  openMenu() {
    this.menuStatus = !this.menuStatus;
  }

}
