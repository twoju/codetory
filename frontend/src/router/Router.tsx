import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/shared/molecules/Header';
import Story from '../pages/Story';
import Roadmap from '../pages/Roadmap';
import Mypage from '../pages/Mypage';
import NotFound from '../pages/NotFound';

/** 전체 페이지 라우터 컴포넌트 */
const Router = () => {
  return (
    <BrowserRouter>
    <HeaderWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const HeaderWrapper = () => {
  const location = useLocation();
  switch (location.pathname) {
    case '/':
      return <Header page='home' />
    case '/story':
      return <Header page='tab' title='이야기 보기' />
    case '/roadmap':
      return <Header page='tab' title='로드맵' />
    case '/mypage':
      return <Header page='tab' title='마이페이지' />
    default:
      return <Header page='default' />
  }
}

export default Router;
