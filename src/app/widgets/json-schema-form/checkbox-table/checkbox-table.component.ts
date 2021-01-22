import { Component, EventEmitter, OnInit } from "@angular/core";
import { RouterLinkWithHref } from "@angular/router";
import { WidgetComponent, Schema } from "@dashjoin/json-schema-form";

@Component({
    selector: "app-checkbox-table",
    templateUrl: "./checkbox-table.component.html",
    styleUrls: ["./checkbox-table.component.scss"],
})
export class CheckboxTableComponent implements WidgetComponent, OnInit {
    columnHeadLabel_id: string = "Nr.";
    columnHeadLabel_description: string = "Beschreibung";
    columnHeadLabel_buttons: Array<string> = [""];
    columnHeadLabel_value: string = "Punkte";
    columnHeadLabel_comment: string = "Bemerkung";

    label: string;
    value: object = {};
    valueChange: EventEmitter<any> = new EventEmitter();
    schema: Schema | any;
    rootSchema: Schema;

    processedSchema: any;

    ngOnInit(): void {
        this.processedSchema = this.buildSchema(this.schema.properties);
        this.value = this.buildValue(this.processedSchema);
        setTimeout(() => {
            this.emitValues();
        }, 50);
    }

    buildSchema(properties): object {
        let schema = {
            headRows: [],
            dataRows: [],
            properties: {},
        };
        if (!!properties.columnHeadLabel_id) {
            this.columnHeadLabel_id = properties.columnHeadLabel_id;
        }
        if (!!properties.columnHeadLabel_description) {
            this.columnHeadLabel_description = properties.columnHeadLabel_description;
        }
        if (!!properties.columnHeadLabel_buttons) {
            this.columnHeadLabel_buttons = properties.columnHeadLabel_buttons;
        }
        if (!!properties.columnHeadLabel_value) {
            this.columnHeadLabel_value = properties.columnHeadLabel_value;
        }
        if (!!properties.columnHeadLabel_comment) {
            this.columnHeadLabel_comment = properties.columnHeadLabel_comment;
        }
        schema.headRows.push(this.columnHeadLabel_id);
        schema.headRows.push(this.columnHeadLabel_description);
        this.columnHeadLabel_buttons.forEach((element) => {
            schema.headRows.push(element);
        });
        schema.headRows.push(this.columnHeadLabel_value);
        schema.headRows.push(this.columnHeadLabel_comment);
        properties.data.forEach((row) => {
            schema.dataRows.push({
                id: row.id,
                description: row.description,
                details: row.details,
                rowType: row.rowType,
                type: row.type,
            });
            if (!row.childRows || row.childRows.length == 0) {
                return;
            }
            row.childRows.forEach((childRow) => {
                schema.dataRows.push({
                    id: childRow.id,
                    description: childRow.description,
                    details: childRow.details,
                    rowType: childRow.rowType,
                    type: childRow.type,
                    value: childRow.value,
                    childRowOf: row.id,
                });
            });
        });
        schema.properties = {
            columnHeadLabel_description: properties.columnHeadLabel_description,
            columnHeadLabel_buttons: properties.columnHeadLabel_buttons,
            columnHeadLabel_value: properties.columnHeadLabel_value,
            columnHeadLabel_comment: properties.columnHeadLabel_comment,
            showValue: properties.showValue,
            showComment: properties.showComment,
            buttonsCounter: this.columnHeadLabel_buttons.length,
        };
        return schema;
    }

    buildValue(schema): object {
        let value = {};
        schema.dataRows.forEach((row) => {
            switch (row.rowType) {
                case "parentRow":
                    if (!value[`${row.id}`]) {
                        value[`${row.id}`] = {};
                    }
                    value[`${row.id}`]["comment"] = "";
                    schema.properties.columnHeadLabel_buttons.forEach((buttonLabel) => {
                        value[`${row.id}`][`${buttonLabel}`] = null;
                    });
                    break;
                case "row":
                    if (!value[`${row.id}`]) {
                        value[`${row.id}`] = {};
                    }
                    schema.properties.columnHeadLabel_buttons.forEach((buttonLabel) => {
                        value[`${row.id}`][`${buttonLabel}`] = (row.type === "radiobutton") ? (null) : (false);
                    });
                    break;
                case "childRow":
                    if (!value[`${row.childRowOf}`]) {
                        value[`${row.childRowOf}`] = {};
                    }
                    if (!value[`${row.childRowOf}`]["childRowComments"]) {
                        value[`${row.childRowOf}`]["childRowComments"] = {};
                    }
                    value[`${row.childRowOf}`]["childRowComments"][`${row.id}`] = null;
                    break;

                default:
                    console.error("[ERROR] ► Row has a wrong type.", row);

                    break;
            }
        });
        return value;
    }

    textareaValueChanges(event, row): void {
        if (row.rowType === "parentRow" && row.rowType === "row") {
            this.value[row.id].comment = event.target.value;
        } else if (row.rowType === "childRow") {
            this.value[row.childRowOf]["childRowComments"][row.id] = event.target.value;
        }
        this.emitValues();
    }

    emitValues(): void {
        this.valueChange.emit(this.value);
    }
}
