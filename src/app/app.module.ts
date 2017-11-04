import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { NestedComponent } from './child-component/nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
