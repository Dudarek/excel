import {$} from '@/core/dom';

export function resizeHandler($root, event) {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizeble"]');
    const coords = $parent.getCoords();
    const direction = $resizer.data.resize;
    const resizerDirection = direction === 'col' ? 'bottom' : 'right';
    const col = $parent.data.col;
    const $cells = $root.findAll(`[data-cel-col="${col}"]`);
    let value;
    let delta;

    $resizer.css({
        [resizerDirection]: '-5000px',
    });

    document.onmousemove = e => {
        if (direction === 'col') {
            delta = e.pageX - coords.right;
            value = coords.width + delta;

            $resizer.css({'right': -delta + 'px'});
        } else {
            delta = e.pageY - coords.bottom;
            value = coords.height + delta;
            $resizer.css({'bottom': -delta + 'px'});
        }
    };

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        if (direction === 'col') {
            $parent.css({'width': value + 'px'});
            $cells.forEach(el => $(el).css({'width': value + 'px'}));
        } else {
            $parent.css({'height': value + 'px'});
        }

        $resizer.css({
            right: '',
            bototm: '',
        });
    };
}