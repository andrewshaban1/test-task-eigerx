import { EActionType, IAction } from '../types/action.type';

type ActionConstructor = (params: any) => IAction;

export class ActionRegistry {
  private registry = new Map<EActionType, ActionConstructor>();

  public registerAction(type: EActionType, constructor: ActionConstructor) {
    this.registry.set(type, constructor);
  }

  public getAction(type: EActionType, params: any): IAction {
    if (!type) {
      throw new Error('Type parameter is required');
    }
    const constructor = this.registry.get(type);
    if (!constructor) {
      throw new Error(`Action type "${type}" is not supported`);
    }
    return constructor(params);
  }
}
