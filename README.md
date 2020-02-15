# @lokibai/react-input

> input with compositionStart,compositionUpdate,compositionEnd for ime like Chinese input

> See https://github.com/facebook/react/issues/3926

[![NPM](https://img.shields.io/npm/v/@lokibai/react-input.svg)](https://www.npmjs.com/package/@lokibai/react-input)

## Install

```bash
npm install --save @lokibai/react-input
```

## Usage

```jsx
import React from 'react';
import { Input Textarea } from '@lokibai/react-input';

const MyInput = () => {
  const [value, setValue] = React.useState('');
  const onChange = value => {
    setValue(value);
  };

  return <Input value={value} onChange={onChange} />;
};

const MyTextarea = () => {
  const [value, setValue] = React.useState('');
  const onChange = value => {
    setValue(value);
  };

  return <Textarea value={value} onChange={onChange} />;
};
```

## License

MIT © [](https://github.com/)
