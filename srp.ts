class Order {
}

class OrderFactory {
    createOrder(orderData: any): Order {
        return new Order();
    }
}

class OrderPersistence {
    saveOrder(order: Order): void {
        // Save Order
    }
}