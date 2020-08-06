import {ExcelComponent} from '@/core/ExcelComponent';
import tToolbar from '@/assets/tToolbar';

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar';

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
        });
    }

    toHTML() {
        return tToolbar;
    };

    onClick(e) {
        console.log(e);
    }
};
