import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent {
  @ViewChild('myCanvas')
  canvas: ElementRef<HTMLCanvasElement> | undefined = undefined;

  context: CanvasRenderingContext2D | undefined = undefined;

  ngAfterViewInit(): void {
    if(this.canvas != undefined){
    
      this.context = this.canvas?.nativeElement.getContext('2d')!;

      //set size canvas to max screen, it is srcollable so its more wide than the screen
      this.canvas.nativeElement.width = window.innerWidth + 300;
      this.canvas.nativeElement.height = window.innerHeight;
    } else {
      console.log("Error: No se pudo obtener el canvas");
    }
    //Draw a line
    
    if(this.context != undefined) {
      
      //Draw an arrow
      this.context.beginPath();
      this.context.moveTo(150, 170);
      this.context.lineTo(300, 320);
      //stroke width
      this.context.lineWidth = 10;
      this.context.stroke();
      this.context.closePath();

      this.context.beginPath();
      this.context.moveTo(500, 170);
      this.context.lineTo(300, 320);
      //stroke width
      this.context.lineWidth = 10;
      this.context.stroke();
      this.context.closePath();

      this.context.beginPath();
      this.context.moveTo(775, 170);
      this.context.lineTo(775, 320);
      //stroke width
      this.context.lineWidth = 10;
      this.context.stroke();
      this.context.closePath();
      
    } else {
      console.log("Error: No se pudo obtener el contexto");
    }
  }

  }