import React__default, { useState, createElement } from 'react';

var withComposition = function withComposition(WrappedComponent) {
  var Inner = function Inner(props) {
    var _useState = useState(false),
        composing = _useState[0],
        setComposing = _useState[1];

    var _useState2 = useState(props.value || ''),
        text = _useState2[0],
        setText = _useState2[1];

    var onComposition = function onComposition(e) {
      var type = e.type;
      var value = e.target.value;

      if (type === 'compositionstart') {
        setComposing(true);
      } else if (type === 'compositionend') {
        setComposing(false);
        setText(value);
        props.onChange(value);
      }
    };

    var onChange = function onChange(e) {
      setText(e.target.value);

      if (!composing) {
        props.onChange(e.target.value);
      }
    };

    return React__default.createElement(WrappedComponent, Object.assign({}, props, {
      value: text,
      onChange: onChange,
      onCompositionStart: onComposition,
      onCompositionEnd: onComposition
    }));
  };

  return Inner;
};

var Input =
/*#__PURE__*/
withComposition('input');

var Textarea =
/*#__PURE__*/
withComposition('textarea');

var Thing = function Thing() {
  return createElement("div", null, "hello Input");
};

export { Input, Textarea, Thing, withComposition };
//# sourceMappingURL=react-input.esm.js.map
