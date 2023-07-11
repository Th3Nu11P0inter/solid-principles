class Payment {}
abstract class PaymentProcessor {
    abstract processPayment(payment: Payment): void;
}

class PaypalPaymentProcessor extends PaymentProcessor {
    processPayment(payment: Payment): void {

    }
}

class Order {
    private paymentProcessor: PaymentProcessor;

    constructor(paymentProcessor: PaymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    public processOrder(): void {
        this.paymentProcessor.processPayment(new Payment)
    }
}

const processor: PaymentProcessor = new PaypalPaymentProcessor()
const order: Order = new Order(processor);
order.processOrder();
