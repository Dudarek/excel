import {ExcelComponent} from '@/core/ExcelComponent';
import tHeader from '@/assets/tHeader';

export class Header extends ExcelComponent {
    static className = 'excel__header';

    constructor($root, options) {
        super($root, {
            name: 'Header',
            ...options,
        });
    }


    toHTML() {
        return tHeader;
    };
};