import { useGetServers } from 'API/rest/actions/servers/servers.actions';
import { Card } from 'Atoms';
import { LabelPosition } from 'Atoms/Input/constants';
import SelectInput from 'Atoms/Input/SelectInput';
import { FullWidthContainer, LastUpdated } from 'Components';
import React, { FunctionComponent, useEffect, useState } from 'react';

export const ServerSelection: FunctionComponent<DivType> = () => {
  const [selectedServer, setSelectedServer] = useState('');

  const { getServers, servers } = useGetServers();

  useEffect(() => {
    getServers();
  }, []);

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
                onChange={(event) => setSelectedServer(event.target.value)}
                options={servers.map((server) => server.name)}
                title="Select Server"
              />
            </div>
            <LastUpdated
              server={servers.find((server) => server.name === selectedServer)}
            />
          </Card>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default ServerSelection;
