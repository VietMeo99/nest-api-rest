export declare class StripeCustomerList {
    object?: string;
    url?: string;
    has_more?: boolean;
    data?: StripeCustomer[];
}
export declare class StripeCustomer {
    id?: string;
    object?: string;
    address?: Address;
    balance?: number;
    created?: number;
    currency?: string;
    default_source?: any;
    delinquent?: boolean;
    description?: any;
    discount?: any;
    email?: any;
    invoice_prefix?: string;
    invoice_settings?: InvoiceSettings;
    livemode?: boolean;
    metadata?: Metadata;
    name?: any;
    next_invoice_sequence?: number;
    phone?: any;
    preferred_locales?: any[];
    shipping?: any;
    tax_exempt?: string;
    test_clock?: any;
}
export declare class StripePaymentMethod {
    id?: string;
    object?: string;
    billing_details?: BillingDetails;
    card?: Card;
    created?: number;
    customer?: any;
    livemode?: boolean;
    metadata?: Metadata;
    type?: string;
}
export declare class InvoiceSettings {
    custom_fields?: any;
    default_payment_method?: any;
    footer?: any;
    rendering_options?: any;
}
export declare class Metadata {
    order_tracking_number?: number;
}
export declare class BillingDetails {
    address?: Address;
    email?: any;
    name?: any;
    phone?: any;
}
export declare class Address {
    city?: any;
    country?: any;
    line1?: any;
    line2?: any;
    postal_code?: any;
    state?: any;
}
export declare class Card {
    brand?: string;
    checks?: Checks;
    country?: string;
    exp_month?: number;
    exp_year?: number;
    fingerprint?: string;
    funding?: string;
    generated_from?: any;
    last4?: string;
    networks?: Networks;
    three_d_secure_usage?: ThreeDSecureUsage;
    wallet?: any;
}
export declare class Checks {
    address_line1_check?: any;
    address_postal_code_check?: any;
    cvc_check?: string;
}
export declare class Networks {
    available?: string[];
    preferred?: any;
}
export declare class ThreeDSecureUsage {
    supported?: boolean;
}
export declare class StripePaymentIntent {
    id?: string;
    amount?: number;
    amount_received?: number;
    client_secret?: string;
    currency?: string;
    customer?: any;
    metadata?: PaymentIntentMetadata;
    payment_method_types?: string[];
    setup_future_usage?: string;
    status?: string;
}
export declare class PaymentIntentMetadata {
    order_tracking_number?: number;
}
