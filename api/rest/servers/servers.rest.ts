// import axios from "axios";

import { client } from '../authenticate/authenticate.rest';

export const getServers = async (): Promise<any> => {
  // const response = await axios.get(`${BASE_URL}/${srn}`);
  // return response.data;
  const response = await client.getServers();

  return response;
};

export const getSessions = async (
  address: string,
  port: number
): Promise<any> => {
  // const response = await axios.get(`${BASE_URL}/${srn}`);
  // return response.data;
  const response = await client.getSessions(address, port);

  return response;
};
