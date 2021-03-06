import {$} from '@/core/dom';
import {ExcelComponent} from '@/core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize, isCell, matrix, nextSelector} from '@/components/table/table.functions';
import {TableSelection} from '@/components/table/TableSelection';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown', 'input'],
            ...options,
        });
    }

    toHTML() {
        return createTable(100);
    };

    prepare() {
        this.selection = new TableSelection();
    }

    init() {
        super.init();

        const $cell = this.$root.find('[data-id="0:0"]');
        this.selectCell($cell);

        this.$on('formula:input', text => {
            this.selection.current.text(text);
        });

        this.$on('formula:done', () => this.selection.current.focus());
    }

    onInput(event) {
        this.$emit('table:input', $(event.target));
    }

    onClick() {
        console.log('click');
    }

    selectCell($cell) {
        this.selection.select($cell);
        this.$emit('table:select', $cell);
    }

    onKeydown(event) {
        const keys = [
            'ArrowRight',
            'ArrowDown',
            'ArrowUp',
            'ArrowLeft',
            'Enter',
            'Tab',
        ];
        const {key} = event;
        if (keys.includes(key) && !event.shiftKey) {
            event.preventDefault();

            const id = this.selection.current.id(true);
            const $next = this.$root.find(nextSelector(key, id));
            this.selectCell($next);
        }
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        } else if (isCell(event)) {
            const $target = $(event.target);

            if (event.shiftKey) {
                const $cells = matrix($target, this.selection.current)
                    .map(id => this.$root.find(`[data-id="${id}"]`));

                this.selection.selectGroup($cells);
            } else {
                this.selectCell($target);
            }
        }
    }
};

