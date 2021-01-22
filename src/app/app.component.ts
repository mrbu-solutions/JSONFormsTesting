import { Component, OnInit } from "@angular/core";
import { JsonSchemaFormService } from "@dashjoin/json-schema-form";
import { Schema } from "@dashjoin/json-schema-form/lib/schema";
import { CheckboxTableComponent } from "./widgets/json-schema-form/checkbox-table/checkbox-table.component";
import { DtvTableDataRowSchema } from "./widgets/json-schema-form/checkbox-table/interfaces/dtv-table-data-row-schema";
import { DtvTableSchema } from "./widgets/json-schema-form/checkbox-table/interfaces/dtv-table-schema";
import { MultilineCheckboxComponent } from "./widgets/json-schema-form/multiline-checkbox/multiline-checkbox.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
    title = "test";
    showButtons = true;

    value: any = {
        standortdaten: <object>null,
        raeumlichkeiten: <object>null,
        mindestkriterien: <object>null,
    };
    error: any = {
        standortdaten: <any>null,
        raeumlichkeiten: <any>null,
        mindestkriterien: <any>null,
    };
    schema: any = {
        standortdaten: <Schema>{
            title: "Standortdaten",
            type: "object",
            layout: "horizontal",
            properties: {
                Person: {
                    type: "object",
                    layout: "vertical",
                    properties: {
                        Vermieter: {
                            type: "string",
                            class: ["half-input"],
                        },
                        Straße: {
                            type: "string",
                            class: ["half-input"],
                        },
                        "PLZ, Ort": {
                            type: "string",
                            class: ["half-input"],
                        },
                        Telefon: {
                            type: "string",
                            class: ["half-input"],
                        },
                        Mobil: {
                            type: "string",
                            class: ["half-input"],
                        },
                    },
                },
                Objekt: {
                    type: "object",
                    layout: "vertical",
                    properties: {
                        Objekt: {
                            type: "string",
                            class: ["half-input"],
                        },
                        Straße: {
                            type: "string",
                            class: ["half-input"],
                        },
                        "PLZ, Ort": {
                            type: "string",
                            class: ["half-input"],
                        },
                        Internet: {
                            type: "string",
                            class: ["half-input"],
                        },
                        "E-Mail": {
                            type: "string",
                            class: ["half-input"],
                        },
                    },
                },
            },
        },
        raeumlichkeiten: <Schema>{
            title: "Räumlichkeiten",
            type: "object",
            layout: "vertical",
            definitions: {
                "Angaben zu Quadratmetern": {
                    type: "string",
                    title: "Angaben zu Quadratmetern",
                    description: "Optional, werden beim entsprechenden Kriterium in der Sofrtware berücksichtigt",
                },
            },
            properties: {
                "Maximale Belegung": {
                    type: "number",
                    minimum: -1,
                    title: "Maximale Belegung",
                    description: "Entspricht der Anzahl der vorhandenen fest installierten Betten inkl. Bettcouchen/Schrankbetten, aber ohne Zustellbetten.",
                    style: {
                        "font-size": "20px",
                        "font-weight": "bold",
                        width: "372px",
                    },
                },
                "Wohnfläche des Hauses/der Wohnung (gemäß WoFlV)": {
                    type: "number",
                    title: "Wohnfläche des Hauses/der Wohnung (gemäß WoFlV) in Quadratmetern",
                    description: "Wohnfläche des Hauses/der Wohnung (gemäß WoFlV) in Quadratmetern",
                    style: {
                        width: "372px",
                    },
                },
                Räumlichkeiten: {
                    type: "object",
                    layout: "horizontal",
                    properties: {
                        "Anzahl der Räumlichkeiten": {
                            type: "object",
                            layout: "vertical",
                            properties: {
                                "Anzahl Wohnzimmer": {
                                    type: "string",
                                    title: "Anzahl der Wohnzimmer",
                                    description: "Integrierte Wohnküche/Küchenzeile wird pauschal mit 4 qm von der Gesamtgröße abgezogen)",
                                },
                                "Anzahl Schlafzimmer": {
                                    type: "string",
                                    title: "Anzahl der Schlafzimmer",
                                },
                                "Anzahl Kinderzimmer": {
                                    type: "string",
                                    title: "Anzahl der Kinderzimmer",
                                },
                                "Anzahl Kombinierte/s Wohn-/Schlafzimmer": {
                                    type: "string",
                                    title: "Anzahl der Kombinierten Wohn- & Schlafzimmer",
                                },
                                "Anzahl Küchen": {
                                    type: "string",
                                    title: "Anzahl der Küchen",
                                    description: "Pauschal 4 qm für Integrierte Wohnküche/Küchenzeile.",
                                },
                                "Anzahl Bad/Bäder": {
                                    type: "string",
                                    title: "Anzahl der Bäder",
                                    description: "inkl. WC",
                                },
                                "Anzahl Zusätzliche WCs": {
                                    type: "string",
                                    title: "Anzahl der Zusätzlichen WCs",
                                },
                                "Anzahl Flur/Diele": {
                                    type: "string",
                                    title: "Anzahl der Flure & Dielen",
                                },
                                "Anzahl Sonstiges": {
                                    type: "string",
                                    title: "Anzahl der Spielzimmer, Arbeitszimmer, Lesezimmer, etc.",
                                },
                            },
                        },
                        "Angaben zu Quadratmetern": {
                            type: "object",
                            layout: "vertical",
                            properties: {
                                Wohnzimmer: {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                                Schlafzimmer: {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                                Kinderschlafzimmer: {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                                "Kombinierte/s Wohn-/Schlafzimmer": {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                                "Küche/n": {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                                "Bad/Bäder": {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                                "Zusätzliche WCs": {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                                "Flur/Diele": {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                                Sonstiges: {
                                    title: "Quadratmeter",
                                    $ref: "#/definitions/Angaben zu Quadratmetern",
                                },
                            },
                        },
                    },
                },
                bemerkungen: {
                    type: "string",
                    title: "Bemerkungen",
                    description: "Bitte tragen Sie hier Bemerkungen ein.",
                    style: {
                        width: "372px",
                    },
                },
            },
        },
        mindestkriterien: <Schema><unknown>{
            title: "Mindestkriterien",
            type: "object",
            layout: "vertical",
            properties: {
                allgemein: {
                    type: "object",
                    widget: "custom",
                    widgetType: "checkbox-table",
                    title: "Allgemeine Mindestkriterien",
                    properties: <DtvTableSchema>{
                        columnHeadLabel_description: "Beschreibung",
                        columnHeadLabel_buttons: ["Zi 1", "Zi 2", "Zi 3", "Zi 4"],
                        columnHeadLabel_value: "Punkte",
                        columnHeadLabel_comment: "Bemerkung",
                        showValue: true,
                        showComment: true,
                        dataRows: [
                            {
                                id: "1.0",
                                description: "Beschreibung 1",
                                details: "Details 1",
                                rowType: "parentRow",
                                childRows: [
                                    {
                                        id: "a",
                                        description: "Beschreibung 1a",
                                        details: "",
                                        rowType: "childRow",
                                        type: "radiobutton",
                                        value: "16",
                                    },
                                    {
                                        id: "b",
                                        description: "Beschreibung 1b",
                                        details: "",
                                        rowType: "childRow",
                                        type: "radiobutton",
                                        value: "8",
                                    },
                                ],
                            },
                            {
                                id: "2.0",
                                description: "Beschreibung 2",
                                details: "",
                                rowType: "row",
                                type: "checkbox",
                                value: "20",
                            },
                        ],
                    },
                },
            },
        },
    };

    constructor(private service: JsonSchemaFormService) {}

    ngOnInit() {
        this.service.registerComponent("multiline-checkbox", MultilineCheckboxComponent);
        this.service.registerComponent("checkbox-table", CheckboxTableComponent);
    }

    printJSON(json: any) {
        console.log("Value: ", JSON.stringify(json, null, 2));
    }

    printError(error: any) {
        console.log("Error: ", error);
    }
}
