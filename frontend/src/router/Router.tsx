import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

/** 전체 페이지 라우터 컴포넌트 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
