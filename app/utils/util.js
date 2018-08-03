import React from 'react';
import find from 'lodash/find';
import flatten from 'lodash/flatten';
import map from 'lodash/map';

export function buildClassName(array, item, prefix) {
  if (array.includes(item)) {
    return `${prefix}--${item}`;
  }

  return false;
}

export function resetPageView() {
  const pageContent = document.getElementById('content');

  if (pageContent) {
    pageContent.scrollIntoView();
    pageContent.focus();
  }
}

export function findDeep(collection, obj) {
  if (find(collection, obj)) {
    return [collection];
  }

  return flatten(
    map(collection, function(v) {
      return typeof v === 'object' ? findDeep(v, obj) : [];
    }),
    true
  );
}

export function containsDeep(collection, obj) {
  const result = findDeep(collection, obj);

  return Boolean(result.length);
}

export function detectDevice() {
  const userAgent = navigator.userAgent.toLowerCase();

  return {
    android: userAgent.indexOf('android') > -1,
    iOS: /ip(ad|hone|od)/.test(userAgent)
  };
}

export function downloadFile(data, filename, mime) {
  const blob = new Blob([data], { type: mime || 'application/octet-stream' });
  const blobURL = window.URL.createObjectURL(blob);

  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // IE workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const tempLink = document.createElement('a');

    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);
    tempLink.setAttribute('target', '_blank');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  }
}

export function getCookies() {
  var cookies = {};

  for (const cookie of document.cookie.split('; ')) {
    const [name, value] = cookie.split('=');

    cookies[name] = decodeURIComponent(value);
  }
  return cookies;
}

export function getCookie(name) {
  const cookies = getCookies();
  let cookie = cookies.hasOwnProperty(name) ? cookies[name] : null;

  if (cookie) {
    try {
      cookie = JSON.parse(cookie);
    } catch (err) {
      // Catch any errors
    }
  }

  return cookie;
}

// Replace multi string
export function replaceAll(string, keywords) {
  return string.replace(/\{(\d)\}/g, token => {
    const index = token[1];

    return keywords[index];
  });
}

export function bytesToSize(bytes, units) {
  var sizes = units || ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  if (bytes === 0) {
    return '0';
  }
  const value = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);

  return Math.round(bytes / Math.pow(1024, value), 2) + ' ' + sizes[value];
}

export function scalingFactor(bytes) {
  const value = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)), 10);

  return isNaN(value) ? 0 : value;
}

export function toDecimal(place, number) {
  if (!number) {
    return 0;
  }
  return number.toFixed(place);
}

export function calculateToDecimal(values) {
  const numbers = values && values.length ? values : [];
  let decimal = numbers.reduce((acc, cur) => {
    const arr = cur.toString().split('.');

    if (arr.length > 1) {
      // Count places after decimal point
      const decimalPlaces = arr[1].length;

      if (decimalPlaces > acc) {
        // Update accumulator to highest value
        acc = decimalPlaces;
      }
    }

    return acc;
  }, 0);

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  if (min === max) {
    // Add additional decimal palce
    decimal += 1;
  }

  return toDecimal.bind(null, decimal);
}

export function toSigFig(number, sigFigs) {
  // Converts number to N significant figures
  const n = sigFigs || number.toString().length;

  return Number(number.toPrecision(n));
}

export function scaleDownByPowerOfThousand(value, scaling) {
  return value / Math.pow(1000, scaling);
}

export function toSigScale(value, factor, sigFigs = 3) {
  return toSigFig(scaleDownByPowerOfThousand(value, factor), sigFigs);
}

export function formatAddress(address) {
  return address.split(',').join(', ');
}

/* eslint-disable */
export function mockComponent(name, props = {}, children) {
  return () => React.createElement(name, props, props.children);
}
/* eslint-enable */
