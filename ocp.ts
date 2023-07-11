class Payment {}
abstract class PaymentProcessor {
    abstract processPayment(payment: Payment): void;
}

class CreditCardPaymentProcessor extends PaymentProcessor {
    processPayment(payment: Payment): void {

    }
}

class PaypalPaymentProcessor extends PaymentProcessor {
    processPayment(payment: Payment): void {

    }
}