(function() {
    // Creates a new canvas element and appends it as a child
    // to the parent element, and returns the reference to
    // the newly created canvas element


    function createCanvas(parent, width, height) {
        var canvas = {};
        canvas.node = document.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        canvas.node.width = width || 100;
        canvas.node.height = height || 100;
        parent.appendChild(canvas.node);
        return canvas;
    }

    function draw(container, width, height) {
        var canvas = createCanvas(container, width, height);
        var ctx = canvas.context;
        ctx.fillRect(25,25,100,100);
    }

    function init(container, width, height, fillColor) {
        var canvas = createCanvas(container, width, height);
        var ctx = canvas.context;
        var self = this;
        var xStart = 0;
        var yStart = 0;
        var xEnd = 0;
        var yEnd = 0;

        // define a custom fillCircle method
        ctx.fillCircle = function(x, y, radius, fillColor) {
            this.fillStyle = fillColor;
            this.beginPath();
            this.moveTo(x, y);
            //this.lineTo(x, y);
            //this.stroke();
            this.arc(x, y, radius, 0, Math.PI * 2, false);
            this.fill();
        };
        ctx.clearTo = function(fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, width, height);
        };
        ctx.clearTo(fillColor || "#ddd");

        // bind mouse events
        canvas.node.onmousemove = function(e) {
            if (!canvas.isDrawing) {
                return;
            }

            //var x = e.pageX - this.offsetLeft;
            //var y = e.pageY - this.offsetTop;
            var x = e.pageX - 300;
            var y = e.pageY - 74;
            //var radius = 4; // or whatever
            ctx.strokeStyle = '#ff0000';
            ctx.fillStyle = '#ddd';
            //ctx.fillRect(0, 0, 1000, 1000);
            //ctx.strokeRect(xStart   , yStart, x - xStart, y - yStart);
        };
        canvas.node.onmousedown = function(e) {
            canvas.isDrawing = true;
            xStart = e.pageX - 300;
            yStart = e.pageY - 74;
        };
        canvas.node.onmouseup = function(e) {
            canvas.isDrawing = false;
            xEnd = e.pageX - 300;
            yEnd = e.pageY - 74;
            ctx.strokeRect(xStart, yStart, xEnd - xStart, yEnd - yStart);
        };
    }

    var container = document.getElementById('canvas');
    init(container, 1000, 1000, '#ddd');
    //draw(container, 200, 200);

})();