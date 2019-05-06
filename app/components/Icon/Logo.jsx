import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ classes, id }) => {
  const classList = classes ? `pr-icon ${classes}` : 'pr-icon';
  const iconId = !id ? '' : id;

  return (
    <svg
      className={classList}
      xmlns="http://www.w3.org/2000/svg"
      width="215px"
      height="125px"
      viewBox="0 0 215 125"
      aria-labelledby={iconId}
    >
      <defs>
        <radialGradient
          id="plex-gradient"
          cx="185.87"
          cy="34.08"
          r="50.91"
          fx="185.87"
          fy="34.08"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgb(249, 190, 3)" stopOpacity="1" />
          <stop offset="1" stopColor="rgb(204, 124, 25)" stopOpacity="1" />
        </radialGradient>
      </defs>
      <title id={iconId}>Plex Requests</title>

      <g id="plex-request-logo" stroke="none">
        <g id="plex">
          <path d="m212.49001,2l-19.73001,0l-19.73999,34.23l19.73999,34.24l19.71001,0l-19.71001,-34.22l19.73001,-34.25zm0,0" />
          <rect height="29" width="14.2" y="10" x="2.5" />
          <path
            fill="url(#plex-gradient)"
            d="m151.25,2l19.73,0l21.78,34.25l-21.78,34.25l-19.73,0l21.77,-34.25l-21.77,-34.25zm0,0"
          />
          <path d="m144.44,70.47l-39.27,0l0,-68.47l39.27,0l0,11.89l-24.81001,0l0,15.04l23.09,0l0,11.89l-23.09,0l0,17.66l24.81001,0l0,11.99zm-88.1,0l0,-68.47l14.43,0l0,56.48l27.60001,0l0,11.99l-42.03,0zm-13.7,-30.21c-4.57,3.9 -11.08,5.85 -19.52,5.85l-6.19,0l0,24.36l-14.43,0l0,-36.27l19.73,0.03c12.09,-0.14 12.72,-7.59 12.72,-10.17c0,-2.4 0,-10.05 -10.74,-10.17l-21.71,0l0,-11.89l21.74,0c8.25,0 14.52,1.79 18.82,5.36c4.3,3.58 6.45,8.91 6.45,16c0,7.36 -2.29,13 -6.87,16.9zm0,0" />
        </g>

        <path
          id="request"
          d="m10.03,100.14l0,13.78l-7.53,0l0,-35.91l10.34,0c4.79,0 8.36,0.89 10.69,2.66c2.33,1.78 3.49,4.47 3.49,8.09c0,2.11 -0.57,3.99 -1.71,5.64c-1.14,1.64 -2.77,2.93999 -4.9,3.89c5.34,8.06 8.82,13.27 10.44,15.63l-8.36,0l-8.47,-13.78l-3.99,0zm0,-15.88l0,9.68999l2.42,0c2.38,0 4.13,-0.39999 5.26,-1.2c1.14,-0.8 1.7,-2.05 1.7,-3.74c0,-1.69 -0.57,-2.9 -1.71,-3.64c-1.14,-0.74001 -2.94,-1.11 -5.41,-1.11l-2.26,0zm45.72,23.39l0,6.27l-20.42,0l0,-35.91l20.42,0l0,6.25l-12.89,0l0,7.89l12,0l0,6.22l-12,0l0,9.28l12.89,0zm20.65,-23.32c-2.98,0 -5.24,1.02 -6.76,3.06c-1.51,2.04 -2.28,5.06 -2.28,9.06c0,8.07 3,12.11 9,12.11c6,0 9,-4.04 9,-12.11c0,-8.07999 -2.98,-12.12 -8.96,-12.12zm16.86,12.12c0,4.23 -0.74001,7.78001 -2.22,10.64c-1.49,2.85001 -3.66,4.95 -6.51,6.28001l8.55,9.63l-9.66,0l-6.5,-8.05l-0.57,0c-5.43,0 -9.61,-1.59 -12.52,-4.78c-2.91,-3.18 -4.37,-7.75999 -4.37,-13.75c0,-5.98 1.46,-10.55 4.37,-13.7c2.95,-3.15 7.15,-4.72 12.6,-4.72c5.45,0 9.62,1.59 12.5,4.77c2.89,3.19 4.33,7.75 4.33,13.68zm26.62,-18.43999l7.52,0l0,23.25c0.04,3.98 -1.29,7.18999 -3.96,9.61c-2.68,2.42 -6.27,3.6 -10.77,3.54c-4.59,0 -8.13,-1.18 -10.64,-3.56001c-2.51,-2.37 -3.76,-5.61 -3.76,-9.7l0,-23.14l7.5,0l0,22c0,2.8 0.55,4.82999 1.65,6.11c1.11,1.27 2.91,1.91 5.4,1.91c2.49,0 4.29,-0.65 5.4,-1.94c1.1,-1.28999 1.66,-3.34 1.66,-6.14l0,-21.93999zm34.51,29.64l0,6.27l-20.42,0l0,-35.91l20.42,0l0,6.25l-12.89,0l0,7.89l12,0l0,6.22l-12,0l0,9.28l12.89,0zm28.35001,-3.15c0,3.22 -1.14,5.77 -3.45001,7.64c-2.29999,1.87 -5.42999,2.81 -9.37999,2.81c-3.96001,0 -7.39,-0.71999 -10.28,-2.16l0,-7.06c2.39,1.05 4.40999,1.8 6.06999,2.25999c1.65001,0.46 3.24001,0.68 4.77,0.68c1.53,0 2.73,-0.32 3.60001,-0.97c0.87,-0.64 1.31,-1.59 1.31,-2.85c0,-0.72 -0.20001,-1.36 -0.59001,-1.89c-0.39999,-0.54 -0.93999,-1.05 -1.64,-1.53c-0.68999,-0.48 -2.18999,-1.27 -4.5,-2.38c-2.31,-1.10001 -3.98999,-2.12 -5.06,-3.06001c-2.37,-2.07999 -3.56,-4.68 -3.56,-7.81c0,-3.13 1.06,-5.6 3.19,-7.42c2.12,-1.82 5.06,-2.73 8.81999,-2.73c3.18001,0 6.69,0.84 10.54001,2.54l-2.42,5.91c-1.89,-0.78001 -3.47,-1.32 -4.72,-1.63c-1.26001,-0.31 -2.54001,-0.47 -3.82001,-0.47c-1.28999,0 -2.31,0.33 -3.08,0.99001c-0.75999,0.64999 -1.14,1.54 -1.14,2.64c0,1.28 0.63,2.35 1.91,3.23c0.63,0.43 2.22,1.26 4.78,2.48c3.29001,1.6 5.55,3.21 6.8,4.83c1.23,1.62 1.85001,3.6 1.85001,5.95zm20.12999,-20.16l0,29.58l-7.53,0l0,-29.58l-9.62999,0l0,-6.32999l26.78999,0l0,6.32999l-9.63,0zm0,0"
        />
      </g>
    </svg>
  );
};

Logo.propTypes = {
  classes: PropTypes.string,
  id: PropTypes.string
};

export default Logo;