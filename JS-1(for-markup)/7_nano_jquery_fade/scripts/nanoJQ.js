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

    this.fadeOut = function(t = 500) {
		let fps = 50;
		let time = t;
		let steps = time / (1000 / fps);
		let op = 1;
		let dO = op / steps;
		let elements = this.elements;
		let timer = setInterval(function() {
			op -= dO;
			for ( let i = 0; i < elements.length; i++) {
				elements[i].style.opacity = op;
			}
			steps--;
			if(steps === 0) {
				clearInterval(timer);
				for ( let i = 0; i < elements.length; i++) {
					elements[i].style.display = 'none';
				}
			}
		}, (1000 / fps));
		return this;
	}

	this.fadeIn = function(t = 500) {
		let fps = 50;
		let time = t;
		let steps = time / fps;
		let op = 0;
		let dO = 1 / steps;
		let elements = this.elements;
		for ( let i = 0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
		let timer = setInterval(function() {
			op += dO;
			for ( let i = 0; i < elements.length; i++) {
				elements[i].style.opacity = op;
			}
			steps--;
			if(steps === 0) {
				clearInterval(timer);
			}
		}, (1000 / fps));
		return this;
	}

	this.html = function(html) {
		if(typeof(html) === 'undefined') {
			return this.elements[0].innerHTML;
		}

		for(let i = 0; i < this.elements.length; i++) {
			this.elements[i].innerHTML = html;
		}

		return this;
	}
}