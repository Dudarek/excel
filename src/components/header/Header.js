import {ExcelComponent} from '@/core/ExcelComponent';
import tHeader from '@/assets/tHeader';

export class Header extends ExcelComponent {
    static className = 'excel__header';

    toHTML() {
        return tHeader;
    };
};