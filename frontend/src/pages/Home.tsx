import Button from '../components/shared/atoms/Button';
import LineHome from '../assets/svgs/lineHome.svg';
import FilledHome from '../assets/svgs/filledHome.svg?react';
import { useEffect } from 'react';
import { adminApi } from '../apis';

function Home() {
  useEffect(() => {
    adminApi.homeTest().then((res) => console.log(res));
  }, []);
  return (
    <>
      <img src={LineHome} alt="svg" />
      <FilledHome />
      <Button text="입장하기" themes="default" />
    </>
  );
}

export default Home;
