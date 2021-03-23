import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteractiveAppComponent } from './engine/components/interactive-app/interactive-app.component';

const routes: Routes = [
  {path: '', component: InteractiveAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
