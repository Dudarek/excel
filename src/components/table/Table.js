import {ExcelComponent} from '@/core/ExcelComponent';
import tTable from '@/assets/tTable';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    toHTML() {
        return tTable;
    };
};