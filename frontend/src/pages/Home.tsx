import Button from '../components/shared/atoms/Button';
import { ReactComponent as LineHome } from '../assets/svgs/lineHome.svg';

function Home() {
  return (
    <>
      <LineHome/>
      <Button text="입장하기" themes="default" />
    </>
  );
}

export default Home;
