import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  texts: Array<{content: string, author: string, role: string, visibility: boolean}> = [

{    content : " Thing yielding place gathered heaven second isn't darkness does not \
      good very dry morning signs isn't for spirit stars man meat beginning. \
      Meat earth. Face seas doesn't life doesn't fruit brought life gathering also\
      lights isn't day a wherein firmament fruitful read ability",
      author: "Berk Elmas",
      role: "Avukat",
      visibility: true
    },

{    content : " Bunu da Biraz Değiştirelim bakalım place gathered heaven second isn't darkness does not good very dry\
        morning \
        signs isn't for spirit stars man meat beginning. Meat earth. Face seas doesn't life \
        doesn't \
        fruit brought life gathering also lights isn't day a wherein firmament fruitful read \
        ability",
        author: "Ali Yılmaz",
        role: "Yazılım Uzmanı",
      visibility: false
      },

{    content: "Deneme Deneme Denemeheaven second isn't darkness does not good very dry \
        morning \
        signs isn't for spirit stars man meat beginning. Meat earth. Face seas doesn't life \
        doesn't fruit brought life gathering also lights isn't day a wherein firmament \
        fruitful \
        read ability",
        author: "Yılmaz Türker",
        role: "Elektrik Mühendisi",
        visibility: false
      },

{    content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
         ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          author: "Berker Elmas",
          role: "İşsiz",
        visibility: false
      }

  ]

  constructor() { }

  ngOnInit() {
  }

  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    if (currentIndex > this.texts.length || currentIndex < 0) return;

    let nextIndex = 0;
    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.RIGHT) {
        const isLast = currentIndex === this.texts.length - 1;
        nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
        const isFirst = currentIndex === 0;
        nextIndex = isFirst ? this.texts.length - 1 : currentIndex - 1;
    }

    this.texts.forEach((x, i) => x.visibility = (i === nextIndex));
  }

}
