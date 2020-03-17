/**
 * Documents
 * @default defaultData
 */

const defaultState = {
  width: 0,
  type: 'xs',
  swipIndex: 0,
}


/**
 * Set screen
 */
export const SET_SCREEN = 'SET_SCREEN';
export const SET_SCREEN_OK = 'SET_SCREEN_OK';
export const SET_SCREEN_FAIL = 'SET_SCREEN_FAIL';

const getCode = (value) => {
  if (value < 576)
    return 'xs';
  if (value < 769)
    return 'sm';
  if (value < 993)
    return 'md';
  if (value < 1201)
    return 'lg';
  if (value < 1601)
    return 'xl';
  return 'xxl';
}

export const setScreen = (value) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SET_SCREEN });

      if (typeof (value) !== 'number' || value < 0) {
        dispatch({
          type: SET_SCREEN_FAIL,
          reason: 'Invalid input type',
          data: { ...defaultState }
        });
        return reject('Invalid input type');
      }

      let data = {
        width: value,
        type: getCode(value)
      }
      dispatch({
        type: SET_SCREEN_OK,
        reason: null,
        data: data
      });
      return resolve(value);
    });
  };
};


/**
 * Set screen
 */
export const SET_SWIP_INDEX = 'SET_SWIP_INDEX';
export const SET_SWIP_INDEX_OK = 'SET_SWIP_INDEX_OK';
export const SET_SWIP_INDEX_FAIL = 'SET_SWIP_INDEX_FAIL';

export const setSwipIndex = (index) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SET_SWIP_INDEX });

      if (typeof (index) !== 'number' || index < 0) {
        dispatch({
          type: SET_SWIP_INDEX_FAIL,
          reason: 'Invalid input type',
          data: { ...defaultState }
        });
        return reject('Invalid input type');
      }

      let data = { swipIndex: index }
      dispatch({
        type: SET_SWIP_INDEX_OK,
        reason: null,
        data: data
      });
      return resolve(index);
    });
  };
};

/**
 * Reducder
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SCREEN_OK:
      return { ...state, ...action.data };
    case SET_SCREEN_FAIL:
      return { ...state, ...action.data };
    case SET_SWIP_INDEX_OK:
      return { ...state, ...action.data };
    case SET_SWIP_INDEX_FAIL:
      return { ...state, ...action.data };
    default:
      return state;
  }
}