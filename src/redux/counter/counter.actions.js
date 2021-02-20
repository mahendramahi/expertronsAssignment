import {action} from '../utils';
import * as actionTypes from './counter.action-types';

export const onCounterInc = () => action(actionTypes.COUNTER_INC.REQUEST, {});

export const onCounterDec = () => action(actionTypes.COUNTER_DEC.REQUEST, {});
