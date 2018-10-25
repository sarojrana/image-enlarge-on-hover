import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-enlarge-on-hover-angular-6';

  srcImage = 'assets/leopard.jpg';
  srcImageZoom: string;
  showZoom: boolean;
  lensHeight = 200;
  lensWidth = 200;
  resultHeight = 600;
  resultWidth = 600;
  outputBackgroundSize: string;
  outputBackgroundPosition: string;


  zoom(event){
    // setting image height and width
    const imageWidth = event.target.clientWidth;
    const imageHeight = event.target.clientHeight;

    // calculate ratio
    const cx = this.resultWidth/this.lensWidth;
    const cy = this.resultHeight/this.lensHeight;

    // set output background properties
    this.srcImageZoom = 'url(' + this.srcImage + ')';
    console.log(this.srcImageZoom);
    this.outputBackgroundSize = (imageWidth * cx) + 'px ' + (imageHeight * cy) + 'px';
    console.log(this.outputBackgroundSize);

    // calculate lens position
    let lensX = event.offsetX - (this.lensWidth/2);
    let lensY = event.offsetY - (this.lensHeight/2);

    // prevent lens from being outside the target image
    if(lensX > imageWidth - this.lensWidth){
      lensX = (imageWidth - this.lensWidth);
    }
    if(lensX < 0){
      lensX = 0;
    }
    if(lensY > imageHeight - this.lensHeight){
      lensY = (imageHeight - this.lensHeight);
    }
    if(lensY < 0){
      lensY = 0;
    }

    // setting output background position
    this.outputBackgroundPosition = '-' + (lensX * cx) + 'px -' + (lensY * cy) + 'px';
    console.log(this.outputBackgroundPosition);

    this.showZoom = true;
  }
}
