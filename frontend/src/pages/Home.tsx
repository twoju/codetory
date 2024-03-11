import Button from '../components/shared/atoms/Button';
import { useEffect } from 'react';
import { adminApi } from '../apis';

function Home() {
  useEffect(() => {
    adminApi.homeTest().then((res) => console.log(res));
  }, []);
  return (
    <>
      <Button text="입장하기" themes="default" />
    </>
  );
}

export default Home;
