import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { HttpError } from '../utils/error';
import { tree } from '../actions';

export const ExecuteDecistionTree = async (req: Request, res: Response) => {
  const { decisionTree } = req.body;

  if (!decisionTree || decisionTree.length === 0) {
    throw new HttpError(StatusCodes.BAD_REQUEST, 'Invalid request body');
  }

  tree.parseJSON(decisionTree);

  tree.executeActions();

  const deserializedTree = tree.toJSON();

  res.status(StatusCodes.OK).json({
    message: 'Decision tree is executed successfully',
    deserializedTree,
  });
};
