import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { InteractiveAppComponent } from './components/interactive-app/interactive-app.component';



@NgModule({
  declarations: [ InteractiveAppComponent],
  imports: [
    CommonModule
  ],
  exports: [InteractiveAppComponent]
})
export class EngineModule { }
