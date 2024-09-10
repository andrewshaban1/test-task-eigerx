import { IAction, IJSONAction } from '../types/action.type';
import { ActionRegistry } from '../actions/ActionRegistry';

export class DecisionTree {
  private actionTree?: IAction[];

  constructor(private actionRegistry: ActionRegistry) {}

  public executeActions(): void {
    if (!this.actionTree) {
      throw new Error('actionTree is undefined');
    }
    this.actionTree?.map((action) => action.execute());
  }

  public parseJSON(json: IJSONAction[]): void {
    if (!json) {
      throw new Error('Decision tree json must be provided');
    }
    if (!Array.isArray(json)) {
      throw new Error('Decision tree json must be an array');
    }
    if (json.length === 0) {
      throw new Error('Invalid decision tree json');
    }
    this.actionTree = json.map((item) =>
      this.actionRegistry.getAction(item.type, item)
    );
  }

  public toJSON(): IJSONAction[] {
    if (!this.actionTree) {
      throw new Error('actionTree is undefined');
    }
    return this.actionTree?.map((item) => item.toJSON());
  }
}
