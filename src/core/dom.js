class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector;
    };

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html;
            return this;
        }
        return this.$el.outerHTML.trim();
    };

    text(text) {
        if (typeof text === 'string') {
            this.$el.textContent = text;
            return this;
        }

        if (this.$el.tagName.toLowerCase() === 'input') {
            this.$el.value;
        }

        return this;
    };

    clear() {
        this.html('');
        return this;
    };

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    };

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback);
    };

    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }
        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }
        return this;
    };

    get data() {
        return this.$el.dataset;
    }

    closest(selector) {
        return $(this.$el.closest(selector));
    }

    getCoords() {
        return this.$el.getBoundingClientRect();
    }

    find(selector) {
        return $(this.$el.querySelector(selector));
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector);
    }

    css(styles = {}) {
        // eslint-disable-next-line guard-for-in
        for (const prop in styles) {
            this.$el.style[prop] = styles[prop];
        }
        return this;
    }

    focus() {
        this.$el.focus();
        return this;
    }

    id(parse) {
        if (parse) {
            const ids = this.id().split(':');
            return {
                row: +ids[0],
                col: +ids[1],
            };
        }
        return this.data.id;
    }

    addClass(className) {
        this.$el.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.$el.classList.remove(className);
        return this;
    }
};

export function $(selector) {
    return new Dom(selector);
};

$.create = (tagName, clases = '') => {
    const el = document.createElement(tagName);
    if (clases) {
        el.classList.add(clases);
    }
    return $(el);
};
