import { useGetServers } from 'API/rest/actions/servers/servers.actions';
import { GetServersResponse } from 'API/rest/dto/servers.interfaces';
import { usePlexRequestStore } from 'API/store/store';
import { Card, SelectInput } from 'Atoms';
import { LabelPosition } from 'Atoms/Input/constants';
import { FullWidthContainer, LastUpdated } from 'Components';
import PlexAPI from 'plex-api';
import React, { FunctionComponent, useEffect, useState } from 'react';

export const ServerSelection: FunctionComponent<DivType> = () => {
  const { setPlex } = usePlexRequestStore((state) => ({
    setPlex: state.setPlex,
  }));

  const [selectedServer, setSelectedServer] = useState<
    GetServersResponse | undefined
  >(undefined);

  const { getServers, servers } = useGetServers();

  useEffect(() => {
    getServers();
  }, []);

  useEffect(() => {
    if (selectedServer) {
      const apiClient = new PlexAPI({
        hostname: selectedServer.localAddresses,
        token: selectedServer.accessToken,
        options: {
          deviceName: 'Plex Requests API',
          product: 'Plex Web',
          version: '0.1.0',
        },
      });
      setPlex(apiClient);
    }
  }, [selectedServer]);

  return (
    <FullWidthContainer>
      {({ ChildContainer }) => (
        <ChildContainer>
          <Card className="pr-server-select-container">
            <div className="pr-server-select">
              <SelectInput
                id="serverSelect"
                labelPosition={LabelPosition.TOP_LEFT}
                labelText="Select Server"
                name="serverSelect"
                onChange={(event) =>
                  setSelectedServer(
                    servers.find((server) => server.name === event.target.value)
                  )
                }
                options={servers.map((server) => server.name)}
                title="Select Server"
              />
            </div>
            <LastUpdated server={selectedServer} />
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default ServerSelection;
