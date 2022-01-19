// import axios from "axios";

import { client } from '../authenticate/authenticate.rest';

export const getAllUsers = async (): Promise<any> => {
  // const response = await axios.get(`${BASE_URL}/${srn}`);
  // return response.data;
  const response = await client.getAllUsers();

  return response;
};

export const getUsers = async (): Promise<any> => {
  // const response = await axios.get(`${BASE_URL}/${srn}`);
  // return response.data;
  const response = await client.getUsers();

  return response;
};
