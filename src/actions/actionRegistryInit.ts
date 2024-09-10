import { DecisionTree } from '../decision-tree';

import {
  ConditionAction,
  LoopAction,
  SendEmailAction,
  SendSMSAction,
  ActionRegistry,
  TConditionActionParams,
  TLoopActionParams,
  TSendEmailActionParams,
  TSendSMSActionParams,
} from '.';
import { EActionType } from '../types/action.type';

const actionRegistry = new ActionRegistry();

actionRegistry.registerAction(
  EActionType.SendSMS,
  (params: TSendSMSActionParams) => new SendSMSAction(params.phoneNumber)
);

actionRegistry.registerAction(
  EActionType.SendEmail,
  (params: TSendEmailActionParams) =>
    new SendEmailAction(params.sender, params.receiver)
);

actionRegistry.registerAction(
  EActionType.Condition,
  (params: TConditionActionParams) =>
    new ConditionAction(
      params.expression,
      params.trueAction
        ? actionRegistry.getAction(params.trueAction.type, params.trueAction)
        : undefined,
      params.falseAction
        ? actionRegistry.getAction(params.falseAction.type, params.falseAction)
        : undefined
    )
);

actionRegistry.registerAction(EActionType.Loop, (params: TLoopActionParams) => {
  return new LoopAction(
    actionRegistry.getAction(params.subtree.type, params.subtree),
    params.iterations
  );
});

export const tree = new DecisionTree(actionRegistry);
