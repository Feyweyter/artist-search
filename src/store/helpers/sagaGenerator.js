import {all, takeEvery,} from 'redux-saga/effects';

const sagaGenerator = (handlers) => function* sagaReducer() {
  const sagas = Object
    .keys(handlers)
    .reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(handlers, key)) {
        acc.push(
          takeEvery(key, handlers[key]),
        );
      }
      return acc;
    }, []);
  yield all([...sagas]);
};

export default sagaGenerator;
