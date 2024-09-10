import { EActionType, IAction, IJSONAction } from '../types/action.type';

export type TLoopActionParams = {
  type: EActionType;
  iterations: number;
  subtree: IJSONAction;
};

export class LoopAction implements IAction {
  private type = EActionType.Loop;

  constructor(private subtree: IAction, private iterations: number) {
    if (!subtree) {
      throw new Error('subtree parameter should be provided');
    }
    if (!iterations) {
      throw new Error('iterations parameter should be provided');
    }
  }

  public execute(): void {
    for (let i = 0; i < this.iterations; i++) {
      this.subtree.execute();
    }
  }

  public toJSON(): TLoopActionParams {
    return {
      type: this.type,
      iterations: this.iterations,
      subtree: this.subtree?.toJSON(),
    };
  }
}
