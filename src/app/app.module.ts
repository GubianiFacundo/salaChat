import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponentComponent } from './componentes/user-component/user-component.component';
import { RoomComponentComponent } from './componentes/room-component/room-component.component';
import { MessageFormComponent } from './componentes/message-form/message-form.component';
import { MessageListComponentComponent } from './componentes/message-list-component/message-list-component.component';
import { NuevoComponenteComponent } from './componentes/nuevo-componente/nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    RoomComponentComponent,
    MessageFormComponent,
    MessageListComponentComponent,
    NuevoComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
