import { BodyPropType } from '../pages/NaverLogin';
import { client } from './instance';

interface props {
  msg: string;
}

const getUserInfo = async (userId: number) => {
  try {
    const res = await client.get<any>(`/users/${userId}`);
    return res;
  } catch (e) {
    console.log('error', e);
  }
};

const createUser = async (body: BodyPropType) => {
  try {
    const newBody = {
      username: body.name,
      email: body.email
    }
    const res = await client.post<props>(`/users`, newBody);
    return res;
  } catch (e) {
    console.log('error', e);
  }
};

const naverLogin = async (code: string) => {
  try {
    const res = await client.get<any>(`/login?code=${code}`);
    return res;
  } catch (e) {
    console.log('error', e);
  }
};

const getNaverInfo = async (token: string) => {
  console.log('send', token)
  try {
    const res = await client.get<BodyPropType>(`/login/info?token=${token}`);
    return res;
  } catch (e) {
    console.log('error', e);
  }
};

const admin = { getUserInfo, createUser, naverLogin, getNaverInfo };
export default admin;
