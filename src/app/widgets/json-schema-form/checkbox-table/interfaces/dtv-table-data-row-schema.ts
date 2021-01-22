export interface DtvTableDataRowSchema {
    id: string;
    description: string;
    details: string;
    rowType: "parentRow" | "row" | "childRow";
    type: "radiobutton" | "checkbox";
    value?: string | number | boolean;
    childRows?: Array<DtvTableDataRowSchema>;
}
