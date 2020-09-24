import {ExcelComponent} from '@/core/ExcelComponent';
import {$} from '@/core/dom';

export class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options,
        });
    }

    init() {
        super.init();

        this.$formula = this.$root.find('#formula-input');

        this.$on('table:select', $cell => this.$formula.text($cell.text()));

        this.$on('table:input', $cell => this.$formula.text($cell.text()));
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" id="formula-input" contenteditable spellcheck="false">123</div>
        `;
    };

    onKeydown(event) {
        const keys = ['Enter', 'Tab'];

        if (keys.includes(event.key)) {
            event.preventDefault();
            this.$emit('formula:done');
        }
    }

    onInput(event) {
        this.emitter.emit('formula:input', $(event.target).text());
    };
};
