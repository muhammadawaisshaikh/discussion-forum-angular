import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ToastComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
