import { EActionType, IAction } from '../types/action.type';

export type TSendSMSActionParams = {
  type: EActionType;
  phoneNumber: string;
};

export class SendSMSAction implements IAction {
  private type = EActionType.SendSMS;

  constructor(private phoneNumber: string) {
    if (!phoneNumber) {
      throw new Error('phoneNumber parameter should be provided');
    }
  }

  public execute(): void {
    console.log(`Sending SMS to ${this.phoneNumber}`);
  }

  public toJSON(): TSendSMSActionParams {
    return {
      type: this.type,
      phoneNumber: this.phoneNumber,
    };
  }
}
