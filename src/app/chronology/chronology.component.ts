import { Component, OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  OnDestroy,
  HostListener } from '@angular/core';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnInit, OnDestroy {
  @ViewChild('muvekkil', {static : true}) muvekkil: ElementRef;
  @ViewChild('cozulmusdava', {static : true}) cozulmusdava: ElementRef;
  @ViewChild('odul', {static : true}) odul: ElementRef;
  @ViewChild('kisilikekip', {static : true}) kisilikekip: ElementRef;

  // let's get numbers
  muvekkilNumber: number;
  cozulmusdavaNumber: number;
  odulNumber: number;
  kisilikekipNumber: number;

  muvekkilNumberStart: number = 0;
  cozulmusdavaNumberStart: number = 0;
  odulNumberStart: number = 0;
  kisilikekipNumberStart: number = 0;

  @ViewChild('chronology', {static : true}) chronology: ElementRef;
  numberInterval: number;
  activatedIntervalOnce: boolean = false;

  @HostListener('window:scroll', ['$event']) handleScroll(e) {
    //console.log(window.pageYOffset);
    if (this.chronology.nativeElement.getBoundingClientRect().top < 550 && this.activatedIntervalOnce === false) {
      this.activatedIntervalOnce = true;
      this.numberInterval = setInterval(() => {
        if (!(this.muvekkilNumberStart >= this.muvekkilNumber)) {
          this.muvekkilNumberStart++;
          this.renderer.setProperty(this.muvekkil.nativeElement, 'innerText', this.muvekkilNumberStart);
        }
        if (!(this.cozulmusdavaNumberStart >= this.cozulmusdavaNumber)) {
          this.cozulmusdavaNumberStart++;
          this.renderer.setProperty(this.cozulmusdava.nativeElement, 'innerText', this.cozulmusdavaNumberStart);
        }
        if (!(this.odulNumberStart >= this.odulNumber)) {
          this.odulNumberStart++;
          this.renderer.setProperty(this.odul.nativeElement, 'innerText', this.odulNumberStart);
        }
        if (!(this.kisilikekipNumberStart >= this.kisilikekipNumber)) {
          this.kisilikekipNumberStart++;
          this.renderer.setProperty(this.kisilikekip.nativeElement, 'innerText', this.kisilikekipNumberStart);
        }

      },100)

    }
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.muvekkilNumber = parseInt(this.muvekkil.nativeElement.innerText);
    this.cozulmusdavaNumber = parseInt(this.cozulmusdava.nativeElement.innerText);
    this.odulNumber = parseInt(this.odul.nativeElement.innerText);
    this.kisilikekipNumber = parseInt(this.kisilikekip.nativeElement.innerText);

    // lets make all the numbers equal to 0.
    this.renderer.setProperty(this.muvekkil.nativeElement, 'innerText', '0');
    this.renderer.setProperty(this.cozulmusdava.nativeElement, 'innerText', '0');
    this.renderer.setProperty(this.odul.nativeElement, 'innerText', '0');
    this.renderer.setProperty(this.kisilikekip.nativeElement, 'innerText', '0');
  }

  ngOnDestroy() {
    clearInterval(this.numberInterval);
  }
}
