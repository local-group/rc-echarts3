import React, { Component, PropTypes } from 'react';
import echarts from 'echarts';


export class ECharts extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    loading: true,
    style: {},
  };

  componentDidMount() {
    this.drawChart();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.loading) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps) {
    const { onReady } = this.props;
    this.drawChart();
    if (onReady) {
      onReady(this.chart);
    }
  }

  componentWillUnmount() {
    this.chart.dispose();
  }

  drawChart() {
    const { options } = this.props;
    if (this.chart === undefined) {
      this.chart = echarts.init(this.chartDOM);
    } else {
      this.chart.clear();
    }
    this.chart.setOption(options);
  }

  render() {
    const { style } = this.props;
    return (
      <div ref={(dom) => { this.chartDOM = dom; }} style={style} />
    );
  }
}
