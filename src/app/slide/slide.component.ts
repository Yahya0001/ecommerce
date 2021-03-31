import { Component, OnInit } from '@angular/core';
export { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Slide } from '../shared/slide';
import { SlideService } from '../services/slide.service';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  slide : Array<Slide> ;


  constructor(private slideservice : SlideService ) {
    this.slide = new Array<Slide>();
  }

  ngOnInit(): void {
    this.slideservice.getSlide()
    .subscribe(result => {
        this.slide = result;
      console.log(this.slide);
    });
  }
  

  
}


