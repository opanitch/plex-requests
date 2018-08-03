import { assign } from 'lodash';

// *
// * Colors
// *

const color01 = '#ECF5CD';
const color02 = '#E1EEC1';
const color03 = '#C1DDAC';
const color04 = '#90C5B2';
const color05 = '#6EB4BA';
const color06 = '#49A0C3';
const color07 = '#147FC4';
const color08 = '#046BB8';
const color09 = '#045BA2';
const color10 = '#044780';
const color11 = '#043660';
const color12 = '#042743';

const colors = [
  color02,
  color01,
  color03,
  color04,
  color05,
  color06,
  color07,
  color08,
  color09,
  color10,
  color11,
  color12
];

const gray01 = '#cecece';

// *
// * Typography
// *
const sansSerif =
  '"XfinityStandard", "Helvetica Neue", "Helvetica", "Arial", sans-serif';
const letterSpacing = 'normal';
const fontSize = 8;
// *
// * Layout
// *
const padding = 6;
const baseProps = {
  width: 350,
  height: 350,
  padding: {
    top: 5,
    bottom: 50,
    left: 50,
    right: 5
  }
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: 'black',
  stroke: 'transparent',
  strokeWidth: 0
};

const centeredLabelStyles = assign({ textAnchor: 'middle' }, baseLabelStyles);
// *
// * Strokes
// *

export default {
  area: assign(
    {
      style: {
        data: {
          fill: color10
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: 'transparent',
          stroke: gray01,
          strokeWidth: 1
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding: 50,
          fontSize: 10,
          stroke: 'transparent'
        }),
        grid: {
          fill: 'none',
          stroke: gray01,
          pointerEvents: 'visible'
        },
        ticks: {
          fill: 'transparent',
          size: 0,
          stroke: gray01,
          strokeWidth: 1
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: 'black'
        })
      }
    },
    baseProps
  ),
  bar: assign(
    {
      style: {
        data: {
          fill: color09,
          padding,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  candlestick: assign(
    {
      style: {
        data: {
          stroke: color09
        },
        labels: centeredLabelStyles
      },
      candleColors: {
        positive: '#ffffff',
        negative: color09
      }
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: 'transparent',
          opacity: 1,
          stroke: color09,
          strokeWidth: 1
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  group: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  line: assign(
    {
      style: {
        data: {
          fill: 'transparent',
          opacity: 1,
          stroke: color09,
          strokeWidth: 1
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  pie: assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding,
          stroke: color07,
          strokeWidth: 1
        },
        labels: assign({}, baseLabelStyles, { padding: 20 })
      }
    },
    baseProps
  ),
  scatter: assign(
    {
      style: {
        data: {
          fill: color09,
          opacity: 1,
          stroke: 'transparent',
          strokeWidth: 10,
          pointerEvents: 'all'
        },
        labels: centeredLabelStyles
      },
      size: 3
    },
    baseProps
  ),
  stack: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  tooltip: {
    style: assign({}, centeredLabelStyles, {
      padding: 5,
      pointerEvents: 'none'
    }),
    flyoutStyle: {
      stroke: color10,
      strokeWidth: 1,
      fill: '#f0f0f0',
      pointerEvents: 'none'
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: assign(
    {
      style: {
        data: {
          fill: 'transparent',
          stroke: 'transparent',
          strokeWidth: 0
        },
        labels: assign({}, centeredLabelStyles, {
          padding: 5,
          pointerEvents: 'none'
        }),
        flyout: {
          stroke: color10,
          strokeWidth: 1,
          fill: '#f0f0f0',
          pointerEvents: 'none'
        }
      }
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: 'vertical',
    titleOrientation: 'top',
    style: {
      data: {
        type: 'circle'
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: 5 })
    }
  }
};
