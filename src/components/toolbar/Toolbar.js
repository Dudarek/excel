import {ExcelComponent} from '@/core/ExcelComponent';
import tToolbar from '@/assets/tToolbar';

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar';

    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            ...options,
        });
    }

    toHTML() {
        return tToolbar;
    };

    onClick(e) {
        console.log(e);
    }
};
