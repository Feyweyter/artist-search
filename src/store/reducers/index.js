import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({ basename: '/' });

const staticReducers = {
  router: connectRouter(history),
};

export default staticReducers;
