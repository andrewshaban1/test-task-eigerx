import { EActionType, IAction, IJSONAction } from '../types/action.type';

export type TConditionActionParams = {
  type: EActionType;
  expression: string;
  trueAction?: IJSONAction;
  falseAction?: IJSONAction;
};

export class ConditionAction implements IAction {
  private type = EActionType.Condition;

  constructor(
    private expression: string,
    private trueAction?: IAction,
    private falseAction?: IAction
  ) {
    if (!expression) {
      throw new Error('expression parameter should be provided');
    }
  }

  public execute(): void {
    const result = eval(this.expression);
    if (result) {
      this.trueAction?.execute();
    } else {
      this.falseAction?.execute();
    }
  }

  public toJSON(): TConditionActionParams {
    return {
      type: this.type,
      expression: this.expression,
      trueAction: this.trueAction?.toJSON(),
      falseAction: this.falseAction?.toJSON(),
    };
  }
}
