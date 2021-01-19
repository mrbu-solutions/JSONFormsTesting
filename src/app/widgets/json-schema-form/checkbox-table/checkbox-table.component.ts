import { Component, EventEmitter, OnInit } from "@angular/core";
import { WidgetComponent, Schema } from "@dashjoin/json-schema-form";

@Component({
  selector: "app-checkbox-table",
  templateUrl: "./checkbox-table.component.html",
  styleUrls: ["./checkbox-table.component.scss"],
})
export class CheckboxTableComponent implements WidgetComponent, OnInit {
  label: string;
  value: Array<Boolean> = [];
  valueChange: EventEmitter<any> = new EventEmitter();
  schema: Schema;
  rootSchema: Schema;

  ngOnInit(): void {
    this.value = [];
  }

  valueChanges(value, index) {
    this.value[index] = value.checked;
    this.valueChange.emit(this.value);
    console.log("value: ", this.value);
  }
}
