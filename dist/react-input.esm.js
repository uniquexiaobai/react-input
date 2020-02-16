import React, { useState } from 'react';

function withComposition(WrappedComponent) {
  var Inner = function Inner(props) {
    var _useState = useState(false),
        composing = _useState[0],
        setComposing = _useState[1];

    var _useState2 = useState(props.value || ''),
        text = _useState2[0],
        setText = _useState2[1];

    var onComposition = function onComposition(e) {
      var type = e.type;
      var value = e.currentTarget.value;

      if (type === 'compositionstart') {
        setComposing(true);
      } else if (type === 'compositionend') {
        setComposing(false);
        setText(value);
        props.onChange(value);
      }
    };

    var onChange = function onChange(e) {
      setText(e.currentTarget.value);

      if (!composing) {
        props.onChange(e.currentTarget.value);
      }
    };

    return React.createElement(WrappedComponent, Object.assign({}, props, {
      value: text,
      onChange: onChange,
      onCompositionStart: onComposition,
      onCompositionEnd: onComposition
    }));
  };

  return Inner;
}

var Input =
/*#__PURE__*/
withComposition('input');

var Textarea =
/*#__PURE__*/
withComposition('textarea');

export { Input, Textarea, withComposition };
//# sourceMappingURL=react-input.esm.js.map
