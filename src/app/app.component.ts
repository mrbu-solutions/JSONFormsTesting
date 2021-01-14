import { JsonpClientBackend } from "@angular/common/http";
import { Component } from "@angular/core";
import { Schema } from "@dashjoin/json-schema-form/lib/schema";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "test";

  value: any = {
    standortdaten: <String>null,
    raeumlichkeiten: <String>null,
    allgemeine_mindestkriterien: <String>null,
  };
  error: any = {
    standortdaten: <any>null,
    raeumlichkeiten: <any>null,
    allgemeine_mindestkriterien: <any>null,
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
          description:
            "Optional, werden beim entsprechenden Kriterium in der Sofrtware berücksichtigt",
        },
      },
      properties: {
        "Maximale Belegung": {
          type: "number",
          minimum: -1,
          title: "Maximale Belegung",
          description:
            "Entspricht der Anzahl der vorhandenen fest installierten Betten inkl. Bettcouchen/Schrankbetten, aber ohne Zustellbetten.",
          style: {
            "font-size": "20px",
            "font-weight": "bold",
            width: "372px",
          },
        },
        "Wohnfläche des Hauses/der Wohnung (gemäß WoFlV)": {
          type: "number",
          title:
            "Wohnfläche des Hauses/der Wohnung (gemäß WoFlV) in Quadratmetern",
          description:
            "Wohnfläche des Hauses/der Wohnung (gemäß WoFlV) in Quadratmetern",
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
                  description:
                    "Integrierte Wohnküche/Küchenzeile wird pauschal mit 4 qm von der Gesamtgröße abgezogen)",
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
                  description:
                    "Pauschal 4 qm für Integrierte Wohnküche/Küchenzeile.",
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
                  title:
                    "Anzahl der Spielzimmer, Arbeitszimmer, Lesezimmer, etc.",
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
    mindestkriterien: <Schema>{
      title: "Mindestkriterien",
      type: "object",
      layout: "vertical",
      properties: {
        allgemein: {
          type: "object",
          title: "Allgemeine Mindestkriterien",
          layout: "vertical",
          properties: {
            "1.": {
              type: "boolean",
              title:
                "Das Objekt und das Grundstück sind in sauberem Zustand und werden regelmäßig gereinigt und gepflegt. Bei Verschmutzung und mangelnder Hygiene (Schimmel, " +
                "Stockflecken, Ungeziefer, schlechter Geruch etc.) ist eine Klassifizierung nicht möglich",
              description:
                "Das Objekt und das Grundstück sind in sauberem Zustand und werden regelmäßig gereinigt und gepflegt. Bei Verschmutzung und mangelnder Hygiene (Schimmel, " +
                "Stockflecken, Ungeziefer, schlechter Geruch etc.) ist eine Klassifizierung nicht möglich",
              style: {
                overflow: "inherit"
              }
            },
            "2.": {
              type: "boolean",
              title: "2.",
              description:
                "Das Objekt und das Grundstück sind in sauberem Zustand und werden regelmäßig gereinigt und gepflegt. Bei Verschmutzung und mangelnder Hygiene (Schimmel, " +
                "Stockflecken, Ungeziefer, schlechter Geruch etc.) ist eine Klassifizierung nicht möglich",
            },
            "3.": {
              type: "boolean",
              title: "3.",
              description:
                "Das Objekt und das Grundstück sind in sauberem Zustand und werden regelmäßig gereinigt und gepflegt. Bei Verschmutzung und mangelnder Hygiene (Schimmel, " +
                "Stockflecken, Ungeziefer, schlechter Geruch etc.) ist eine Klassifizierung nicht möglich",
            },
          },
        },
      },
    },
  };

  printJSON(json: any) {
    console.log("Value: ", JSON.stringify(json, null, 2));
  }

  printError(error: any) {
    console.log("Error: ", error);
  }
}
