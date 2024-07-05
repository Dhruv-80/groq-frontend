import React from 'react';
import ApexChart from 'react-apexcharts';
import { alpha, styled } from '@mui/material/styles';

const Chart = styled(ApexChart)(({ theme }) => ({
  '& .apexcharts-canvas': {
    '& .apexcharts-tooltip': {
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius * 1.25,
      '&.apexcharts-theme-light': {
        borderColor: 'transparent',
        backgroundColor: alpha(theme.palette.background.default, 0.8),
      },
    },
    '& .apexcharts-xaxistooltip': {
      borderColor: 'transparent',
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius * 1.25,
    },
    '& .apexcharts-tooltip-title': {
      textAlign: 'center',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.text.primary,
    },
    '& .apexcharts-legend': {
      padding: 0,
    },
    '& .apexcharts-legend-series': {
      display: 'inline-flex !important',
      alignItems: 'center',
    },
    '& .apexcharts-legend-marker': {
      marginRight: 8,
    },
    '& .apexcharts-legend-text': {
      lineHeight: '18px',
      textTransform: 'capitalize',
    },
  },
}));

export default Chart;
