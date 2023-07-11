interface Printer {
    print(): void;
}

interface Scanner {
    scan(): void;
}

class InkjetPrinter implements Printer {
    print(): void {

    }
}

class LaserPrinter implements Printer {
    print(): void {

    }
}

class BasicScanner implements Scanner {
    scan(): void {
        
    }
}