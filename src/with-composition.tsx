import React, { useState } from 'react';

export interface Props {
  value?: string;
  onChange: (x: string) => void;
}

const withComposition = (WrappedComponent: any) => {
  const Inner: React.FC<Props> = props => {
    const [composing, setComposing] = useState(false);
    const [text, setText] = useState(props.value || '');
    const onComposition = (e: any) => {
      const type = e.type;
      const value = e.target.value;

      if (type === 'compositionstart') {
        setComposing(true);
      } else if (type === 'compositionend') {
        setComposing(false);
        setText(value);
        props.onChange(value);
      }
    };
    const onChange = (e: any) => {
      setText(e.target.value);

      if (!composing) {
        props.onChange(e.target.value);
      }
    };

    return React.createElement(
      WrappedComponent,
      Object.assign({}, props, {
        value: text,
        onChange: onChange,
        onCompositionStart: onComposition,
        onCompositionEnd: onComposition,
      })
    );
  };

  return Inner;
};

export default withComposition;
