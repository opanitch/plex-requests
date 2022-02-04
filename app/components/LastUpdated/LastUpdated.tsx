import { GetServersResponse } from 'API/rest/dto/servers.interfaces';
import React, { FunctionComponent } from 'react';

interface LastUpdatedType {
  server?: GetServersResponse;
}

const LastUpdated: FunctionComponent<LastUpdatedType> = ({ server }) => {
  const lastUpdate = server?.updatedAt;
  const readableDate = lastUpdate && new Date(parseInt(lastUpdate) * 1000);

  const updatedCopy = `Last Updated: ${readableDate}`;

  return lastUpdate ? (
    <div className="pr-header-lastUpdate">{updatedCopy}</div>
  ) : null;
};

export default LastUpdated;
