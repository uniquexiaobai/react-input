import React, { useState } from 'react';

export interface Props {
  value?: string;
  onChange: (x: string) => void;
}

type InputType = 'input' | 'textarea';

function withComposition<T extends Props>(
  WrappedComponent: React.ComponentType<T> | InputType
) {
  const Inner: React.FC<T & Props> = props => {
    const [composing, setComposing] = useState(false);
    const [text, setText] = useState<string>(props.value || '');
    const onComposition = (e: React.FormEvent<HTMLInputElement>) => {
      const type = e.type;
      const value = e.currentTarget.value;

      if (type === 'compositionstart') {
        setComposing(true);
      } else if (type === 'compositionend') {
        setComposing(false);
        setText(value);
        props.onChange(value);
      }
    };
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
      setText(e.currentTarget.value);

      if (!composing) {
        props.onChange(e.currentTarget.value);
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
}

export default withComposition;
