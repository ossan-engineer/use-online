# use-online

> React hook for subscribing the browser&#x27;s connection status.

[![NPM](https://img.shields.io/npm/v/@ossan-engineer/use-online.svg)](https://www.npmjs.com/package/@ossan-engineer/use-online)

## Install

```bash
yarn add use-online
```

## Usage

```tsx
import React from 'react';

import { useOnline } from 'use-online';

const Example = () => {
  const isOnline = useOnline();
  return <div>{isOnline ? 'ONLINE' : 'OFFLINE'}</div>;
};
```

## License

MIT © [ossan-engineer](https://github.com/ossan-engineer)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
