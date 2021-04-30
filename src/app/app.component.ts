import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {DatePipe} from '@angular/common';
import { Images } from './app.form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentDate: Date;
  previousDate: Date;
  imagesArray: Images;

  constructor(private appService: AppService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.showImages();
  }

  showImages() {
    this.currentDate = new Date();
    this.previousDate = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
    const currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
    const previousDate = this.datePipe.transform(this.previousDate, 'yyyy-MM-dd');

    return this.appService.getImages(currentDate, previousDate).subscribe((data) => {
      this.imagesArray = data.body;
    });
  }
}