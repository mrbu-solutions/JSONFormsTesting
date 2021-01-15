import { Component, EventEmitter } from "@angular/core";
import { WidgetComponent, Schema } from "@dashjoin/json-schema-form";

@Component({
  selector: 'app-checkbox-table',
  templateUrl: './checkbox-table.component.html',
  styleUrls: ['./checkbox-table.component.scss']
})
export class CheckboxTableComponent implements WidgetComponent {
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