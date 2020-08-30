import { lazy } from 'react';

import store from '../../store';

const LoadModule = (moduleName) => lazy(() => import(`../../modules/${moduleName}/effects`)
  .then((module) => {
    store.injectReducer(moduleName, module.reducer);
    store.injectSaga(moduleName, module.sagas);
    return import(`../../modules/${moduleName}`);
  }));

export {
  LoadModule,
};
