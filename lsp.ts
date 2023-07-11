class Shape {
    
    getArea(): number {
        throw new Error("Method not implemented")
    }
}
class Rectangle extends Shape {
    protected width: number;
    protected height: number;

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Shape {
    protected side: number;
    setSide(side: number): void {
        this.side = side;
    }
    
    getArea(): number {
        return this.side * this.side;
    }
}