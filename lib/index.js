'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ECharts = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ECharts = exports.ECharts = function (_Component) {
  _inherits(ECharts, _Component);

  function ECharts() {
    _classCallCheck(this, ECharts);

    return _possibleConstructorReturn(this, (ECharts.__proto__ || Object.getPrototypeOf(ECharts)).apply(this, arguments));
  }

  _createClass(ECharts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.drawChart();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.loading) {
        return false;
      }
      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var onReady = this.props.onReady;

      this.drawChart();
      if (onReady) {
        onReady(this.chart);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.chart.dispose();
    }
  }, {
    key: 'drawChart',
    value: function drawChart() {
      var options = this.props.options;

      if (this.chart === undefined) {
        this.chart = _echarts2.default.init(this.chartDOM);
      } else {
        this.chart.clear();
      }
      this.chart.setOption(options);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.props.style;

      return _react2.default.createElement('div', { ref: function ref(dom) {
          _this2.chartDOM = dom;
        }, style: style });
    }
  }]);

  return ECharts;
}(_react.Component);

ECharts.propTypes = {
  loading: _react.PropTypes.bool,
  style: _react.PropTypes.object
};
ECharts.defaultProps = {
  loading: true,
  style: {}
};