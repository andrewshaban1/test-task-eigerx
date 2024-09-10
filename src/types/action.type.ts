export interface IAction {
  execute: () => void;
  toJSON: () => IJSONAction;
}

export enum EActionType {
  Condition = 'condition',
  SendEmail = 'sendEmail',
  SendSMS = 'sendSMS',
  Loop = 'loop',
}

export interface IJSONAction {
  type: EActionType;
  [key: string]: any;
}
