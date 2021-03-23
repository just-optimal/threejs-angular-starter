import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from '../../services/engine.service';

@Component({
  selector: 'engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {
  @ViewChild('canvas', {static: true})
  public canvas: ElementRef<HTMLCanvasElement>;

  constructor(private engine: EngineService) { }

  public ngOnInit(): void {
    this.engine.createScene(this.canvas);
    this.engine.animate();
  }

}
