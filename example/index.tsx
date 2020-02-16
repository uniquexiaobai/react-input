import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Input, Textarea } from '../.';

const MyInput = () => {
  const [value, setValue] = React.useState('');
  const onChange = value => {
    setValue(value);
    console.log('onChange', value);
  };

  return <Input value={value} onChange={onChange} />;
};

const MyTextarea = () => {
  const [value, setValue] = React.useState('');
  const onChange = value => {
    setValue(value);
    console.log('onChange', value);
  };

  return <Textarea value={value} onChange={onChange} />;
};

const App = () => {
  return (
    <div>
      <MyInput />
      <MyTextarea />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
