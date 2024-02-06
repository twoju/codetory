import Button from '../components/shared/atoms/Button';
import Header from '../components/shared/molecules/Header';

function Home() {
  return (
    <>
      <Header page="default" title="로드맵" />
      <Button text="입장하기" themes="default" />
    </>
  );
}

export default Home;
