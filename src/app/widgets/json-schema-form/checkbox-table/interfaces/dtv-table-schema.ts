import { DtvTableDataRowSchema } from "./dtv-table-data-row-schema";

export interface DtvTableSchema {
    columnHeadLabel_description: string;
    columnHeadLabel_buttons: Array<string>;
    columnHeadLabel_value: string;
    columnHeadLabel_comment: string;
    showValue: boolean;
    showComment: boolean;
    dataRows: Array<DtvTableDataRowSchema>;
}
