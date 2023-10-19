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

    } else {
      console.log("Error: No se pudo obtener el canvas");
    }
    //Draw a line
    
    if(this.context != undefined) {
      
      //Draw an arrow
      this.context.beginPath();
      this.context.moveTo(150, 175);
      this.context.lineTo(100, 100);
      //stroke width
      this.context.lineWidth = 10;
      this.context.stroke();
      this.context.closePath();
      
    } else {
      console.log("Error: No se pudo obtener el contexto");
    }

    
  }

  }