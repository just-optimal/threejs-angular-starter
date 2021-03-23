import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { EngineComponent } from './components/engine/engine.component';



@NgModule({
  declarations: [ EngineComponent ],
  imports: [
    CommonModule
  ],
  exports: [EngineComponent]
})
export class EngineModule { }
