import search from './search';

describe('Search', () => {
  const collection = [
    {
      CreateDate: '2017-06-07 10:50:07',
      NotificationType: 'Device',
      SiteCLLI: 'NJVOLOR1',
      DeviceCLLI: 'NJVOLOR101A',
      ipVpnSiteServiceName: 'IPVPN_Comcast Service Center_457812',
      HealthStatus: 'Online',
      SiteAddress: '1100 Laurel Oak Rd,, Voorhees, NJ 08043'
    },
    {
      CreateDate: '2017-04-30 10:50:07',
      NotificationType: 'Port',
      SiteCLLI: 'PAGLWOL1',
      DeviceCLLI: 'PAGLWOL101A',
      ipVpnSiteServiceName: 'IPVPN_Comcast Service Center_457813',
      HealthStatus: 'Online',
      SiteAddress: '601 W Oak Ln,, Glenolden, PA 19036'
    },
    {
      CreateDate: '2017-04-05 10:50:07',
      NotificationType: 'Port',
      SiteCLLI: 'PAGLWOL1',
      DeviceCLLI: 'PAGLWOL101A',
      ipVpnSiteServiceName: 'IPVPN_Comcast Service Center_457915',
      HealthStatus: 'Online',
      SiteAddress: '601 W Oak Ln,, Glenolden, PA 19036'
    },
    {
      CreateDate: '2017-05-16 10:50:07',
      NotificationType: 'Device',
      SiteCLLI: 'PALETR01',
      DeviceCLLI: 'PALETR0101A',
      ipVpnSiteServiceName: 'IPVPN_Comcast Service Center_457814',
      HealthStatus: 'Online',
      SiteAddress: '2320 Trenton Rd,, Levittown, PA 19056'
    },
    {
      CreateDate: '2017-06-13 10:50:07',
      NotificationType: 'Port',
      SiteCLLI: 'PALETR01',
      DeviceCLLI: 'PALETR0101A',
      ipVpnSiteServiceName: 'IPVPN_Comcast Service Center_457916',
      HealthStatus: 'Offline',
      SiteAddress: '2320 Trenton Rd,, Levittown, PA 19056'
    }
  ];

  it('should return matching results', () => {
    expect(search('off', collection)).toEqual(
      collection.filter(item => item.HealthStatus === 'Offline')
    );
  });

  it('should return matching results for selected keys', () => {
    expect(search('off', collection, ['SiteAddress'])).toEqual([]);
    expect(search('110', collection, ['SiteAddress'])).toEqual(
      collection.filter(item => item.SiteAddress.indexOf('110') !== -1)
    );
  });
});
