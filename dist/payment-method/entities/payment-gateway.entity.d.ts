import { CoreEntity } from 'src/common/entities/core.entity';
export declare class PaymentGateWay extends CoreEntity {
    user_id: number;
    customer_id: string;
    gateway_name: string;
}
