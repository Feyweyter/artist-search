const reducerGenerator = (initialState, handlers) => (state = initialState, { type, payload }) => {
  const handler = handlers[type];
  return handler ? handler(state, payload) : state;
};

export default reducerGenerator;
