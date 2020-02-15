'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var withComposition = function withComposition(WrappedComponent) {
  var Inner = function Inner(props) {
    var _useState = React.useState(false),
        composing = _useState[0],
        setComposing = _useState[1];

    var _useState2 = React.useState(props.value || ''),
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
  return React.createElement("div", null, "hello Input");
};

exports.Input = Input;
exports.Textarea = Textarea;
exports.Thing = Thing;
exports.withComposition = withComposition;
//# sourceMappingURL=react-input.cjs.development.js.map
