import * as util from './util';

describe('util', () => {
  describe('buildClassName', () => {
    const props = ['xl', 'l', 's', 'xs'];

    it('creates class if item exists in the passed array', () => {
      const className = util.buildClassName(props, 's', 'bcp-test');

      expect(className).toBe('bcp-test--s');
    });

    it('returns nothing if item does not exist in the passed array', () => {
      const className = util.buildClassName(props, 'xxl', 'bcp-test');

      expect(className).toBe(false);
    });
  });

  describe('resetPageView', () => {
    const html = `<div id="content" tabIndex="-1"></div>`;
    let element;

    beforeEach(() => {
      document.body.innerHTML = html;
      element = document.getElementById('content');

      element.scrollIntoView = jest.fn();
    });

    it('sets focus to div#content', () => {
      util.resetPageView();

      expect(document.activeElement).toBe(element);
    });

    it('calls scrollIntoView on div#content', () => {
      util.resetPageView();

      expect(element.scrollIntoView).toBeCalled();
    });

    it('does not resetPageView when element does not exist', () => {
      element.parentNode.removeChild(element);
      util.resetPageView();

      expect(element.scrollIntoView).not.toBeCalled();
    });
  });

  describe('findDeep', () => {
    it('finds object inside collection', () => {
      const collection = { fruit: { apples: 1, oranges: 2, pears: 3 } };
      const result = util.findDeep(collection, { oranges: 2 });

      expect(result).toEqual([collection]);
    });

    it('finds object deep inside collection', () => {
      const collection = { fruit: { apples: { type: 'fuji' } } };
      const result = util.findDeep(collection, { type: 'fuji' });

      expect(result).toEqual([collection.fruit]);
    });

    it('returns empty array if object is not found', () => {
      const collection = { fruit: { apples: { type: 'fuji' } } };
      const result = util.findDeep(collection, { type: 'macintosh' });

      expect(result).toEqual([]);
    });
  });

  describe('containsDeep', () => {
    it('returns true if object is found', () => {
      const collection = { fruit: { apples: { type: 'fuji' } } };
      const result = util.containsDeep(collection, { type: 'fuji' });

      expect(result).toBe(true);
    });

    it('returns false if object is not found', () => {
      const collection = { fruit: { apples: { type: 'fuji' } } };
      const result = util.containsDeep(collection, { type: 'macintosh' });

      expect(result).toBe(false);
    });
  });

  describe('downloadFile', () => {
    window.URL.createObjectURL = jest.fn();
    it('downloads files on standard browsers', () => {
      const data = `Service,Available,Unavailable,
									SDWAN,100%,0%,
									Firewall,98.123%,1.877%,
									vRouter,99.976%,0.024%,`;

      expect(window.URL.createObjectURL).not.toHaveBeenCalled();
      util.downloadFile(data, 'example.csv');
      expect(window.URL.createObjectURL).toHaveBeenCalled();
    });

    it('downloads files on Internet Explorer', () => {
      const mockNavigator = jest.fn();
      const data = `Service,Available,Unavailable,
									SDWAN,100%,0%,
									Firewall,98.123%,1.877%,
									vRouter,99.976%,0.024%,`;

      Object.defineProperty(navigator, 'msSaveBlob', {
        get: () => mockNavigator
      });

      expect(mockNavigator).not.toHaveBeenCalled();
      util.downloadFile(data, 'example.csv');
      expect(mockNavigator).toHaveBeenCalled();
    });
  });

  describe('getCookies', () => {
    document.cookie = 'ExampleCookie=test123; path=/';
    it('gets all browser cookies', () => {
      expect(util.getCookies).toBeDefined();
      expect(util.getCookies()).toEqual({
        ExampleCookie: 'test123'
      });
    });

    it('gets specific browser cookie', () => {
      expect(util.getCookie).toBeDefined();
      expect(util.getCookie()).toBeNull();
      expect(util.getCookie('ExampleCookie')).toEqual('test123');
    });
  });

  describe('string formatters', () => {
    it('replaces all tokens in string', () => {
      const message = 'Displaying {0} of {1}';

      expect(util.replaceAll(message, [1, 12])).toEqual('Displaying 1 of 12');
    });
  });

  describe('number formatters', () => {
    it('calculates common decimal place', () => {
      const numbers = [0.1, 0.5, 1];
      const toDecimal = util.calculateToDecimal(numbers);

      expect(toDecimal).toBeDefined();
      expect(toDecimal(2)).toEqual('2.0');
    });

    it('calculates common decimal place without values', () => {
      const toDecimal = util.calculateToDecimal();

      expect(toDecimal).toBeDefined();
      expect(toDecimal(2)).toEqual('2');
    });

    it('formats number to significant figues', () => {
      expect(util.toSigFig(4118.34)).toEqual(4118.34);
      expect(util.toSigFig(4118.34, 1)).toEqual(4000);
      expect(util.toSigFig(4118.34, 2)).toEqual(4100);
      expect(util.toSigFig(4118.34, 3)).toEqual(4120);
    });

    it('formats address', () => {
      expect(
        util.formatAddress('4400 BELLE OAKS DR,N. Charleston,SC 29405')
      ).toEqual('4400 BELLE OAKS DR, N. Charleston, SC 29405');
    });
  });
});
