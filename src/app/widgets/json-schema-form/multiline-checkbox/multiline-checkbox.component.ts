import { Component, EventEmitter } from "@angular/core";
import { WidgetComponent, Schema } from "@dashjoin/json-schema-form";

@Component({
  selector: "app-multiline-checkbox",
  templateUrl: "./multiline-checkbox.component.html",
  styleUrls: ["./multiline-checkbox.component.scss"],
})
export class MultilineCheckboxComponent implements WidgetComponent {
  label: string;
  value: boolean;
  valueChange: EventEmitter<any> = new EventEmitter();
  schema: Schema;
  rootSchema: Schema;

  valueChanges(value) {
    this.value = value.checked;
    this.valueChange.emit(this.value);
  }
}
