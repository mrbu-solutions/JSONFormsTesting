import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { JsonSchemaFormModule } from "@dashjoin/json-schema-form";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MultilineCheckboxComponent } from "./widgets/json-schema-form/multiline-checkbox/multiline-checkbox.component";
import { CheckboxTableComponent } from "./widgets/json-schema-form/checkbox-table/checkbox-table.component";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    MultilineCheckboxComponent,
    CheckboxTableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    JsonSchemaFormModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule
  ],
  entryComponents: [MultilineCheckboxComponent, CheckboxTableComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
