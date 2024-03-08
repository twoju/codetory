import { client } from './instance';

interface props {
  msg: string;
}

const homeTest = async () => {
  try {
    const res = await client.get<props>('/');
    return res;
  } catch (e) {
    console.log('error', e);
  }
};

const admin = { homeTest };
export default admin;
