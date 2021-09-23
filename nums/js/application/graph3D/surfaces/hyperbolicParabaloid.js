Surface.prototype.hyperbolicParaboloid = (p = 2, q = 2, count = 21, color = '#f03538') => {

    const points = [];
    const edges = [];
    const polygones = [];

    const LEFT = -10;
    const RIGHT = 10
    const step = (RIGHT - LEFT) / count;
    //точки 
    for (let x = LEFT; x < RIGHT; x += step) {
        for (let y = LEFT; y < RIGHT; y += step) {
            points.push(new Point(
                x,
                (x ** 2 / p - y ** 2 / q) / 2,
                y,
            ));
        }
    }
    for (let i = 0; i < points.length; i++) {
        if (points[i + 1] && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1));
        }
        if (points[i + count]) {
            edges.push(new Edge(i, i + count));

        }
    }

    for (let i = 0; i < points.length; i++) {
        if (points[i + 1 + count] && (i + 1) % count !== 0) {
            polygones.push(new Polygon([
                i,
                i + 1,
                i + 1 + count,
                i + count
            ], color));
        }
    }
    let c = 0;
    let b = 0;
    let finalClr = {r:222, g:250, b:244};
    let clr = {r: 5, g: 48, b: 39};
    let ofsR = (-clr.r + finalClr.r)/count;
    let ofsG = (-clr.g + finalClr.g)/count;
    let ofsB = (-clr.b + finalClr.b)/count;
    for(let i = 0; i < polygones.length; i++){
        if(c < count - 1){
            polygones[i].color = clr;
        } else {
            c = 0;
            clr = {r: Math.round(clr.r + ofsR), g: Math.round(clr.g + ofsG), b: Math.round(clr.b + ofsB)};
            console.log(clr);
        }
        c++;
    }
    for(let i = count - 1; i < polygones.length; i+=count-1){
        polygones[i].color = polygones[i+1].color;
    }

    return new Subject(points, edges, polygones);
}