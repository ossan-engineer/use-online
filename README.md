# use-online

> This is a custom hook that subscribes the browser&#x27;s connection status.

[![NPM](https://img.shields.io/npm/v/use-online.svg)](https://www.npmjs.com/package/use-online) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-online
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-online'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [ossan-engineer](https://github.com/ossan-engineer)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
