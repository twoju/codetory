import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/shared/organisms/Header';
import Story from '../pages/Story';
import Roadmap from '../pages/Roadmap';
import Mypage from '../pages/Mypage';
import NotFound from '../pages/NotFound';
import Navbar from '../components/shared/molecules/Navbar';
import CostBox from '../components/shared/molecules/CostBox';

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
      <NavbarWrapper />
    </BrowserRouter>
  );
};

const HeaderWrapper = () => {
  const location = useLocation();
  switch (location.pathname) {
    case '/':
      return <Header page="home" cost={<CostWrapper />} />;
    case '/story':
      return <Header page="tab" title="이야기 보기" />;
    case '/roadmap':
      return <Header page="tab" title="로드맵" cost={<CostWrapper />} />;
    case '/mypage':
      return <Header page="tab" title="마이페이지" cost={<CostWrapper />} />;
    default:
      return <Header page="default" />;
  }
};

const NavbarWrapper = () => {
  const location = useLocation();

  const checkPath = () => {
    switch (location.pathname) {
      case '/':
        return true;
      case '/story':
        return true;
      case '/roadmap':
        return true;
      case '/mypage':
        return true;
      default:
        return false;
    }
  };

  return checkPath() ? <Navbar /> : null;
};

const CostWrapper = () => {
  const location = useLocation();

  const checkPath = () => {
    switch (location.pathname) {
      case '/':
        return true;
      case '/roadmap':
        return true;
      case '/mypage':
        return true;
      default:
        return false;
    }
  };

  return checkPath() ? <CostBox star={10} puzzle={999} /> : null;
};

export default Router;
