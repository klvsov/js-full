function nanoJQuery(elements) {
    this.elements = elements;

    this.on = function (eventName, f) {
        elements.forEach(function(item){
            item.addEventListener(eventName, f)
        });
        return this;
    }

    this.add = function(name) {
        elements.forEach(function(item) {
            item.classList.add(name);
        });
        return this;
    }

    this.remove = function(name) {
        elements.forEach(function(item) {
            item.classList.remove(name);
        });
        return this;
    }

    this.toggle = function(name) {
        elements.forEach(function(item) {
            item.classList.toggle(name);
        });
        return this;
    }
}