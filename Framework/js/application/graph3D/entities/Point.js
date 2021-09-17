class Point{
    constructor(x = 0, y = 0, z = 0, color = '#ff0000'){
        this.x = x;
        this.y = y;
        this.z = z;
        this.distance = 0;
        this.lumen = 1;
        this.color = this.hexToRgb(color);
    }
    
    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 }
    }
    rgbToHex(r, g, b) {
        return `rgb(${r},${g},${b})`;
    }
}