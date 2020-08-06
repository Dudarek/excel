import {ExcelComponent} from '@/core/ExcelComponent';
import tFormula from '@/assets/tFormula';

export class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'mouseover'],
        });
    }

    toHTML() {
        return tFormula;
    };

    onInput(event) {
        console.log('input formula', event);
    };

    onMouseover() {
        console.log('mouseover');
    }
};
