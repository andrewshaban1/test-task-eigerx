import { EActionType, IAction } from '../types/action.type';

export type TSendEmailActionParams = {
  type: EActionType;
  sender: string;
  receiver: string;
};

export class SendEmailAction implements IAction {
  private type = EActionType.SendEmail;

  constructor(private sender: string, private receiver: string) {
    if (!sender) {
      throw new Error('sender parameter should be provided');
    }
    if (!receiver) {
      throw new Error('receiver parameter should be provided');
    }
  }

  public execute(): void {
    console.log(`Sending email from ${this.sender} to ${this.receiver}`);
  }

  public toJSON(): TSendEmailActionParams {
    return {
      type: this.type,
      sender: this.sender,
      receiver: this.receiver,
    };
  }
}
