import React from 'react';

import { useOnline } from 'use-online';

const App = () => {
  const isOnline = useOnline();
  return <div>{isOnline ? 'ONLINE' : 'OFFLINE'}</div>;
};
export default App;
