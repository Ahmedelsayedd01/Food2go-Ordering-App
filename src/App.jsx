import './index.css';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      nav
      {/* Main Content Area */}
      <div className="w-full">
        <Outlet />
      </div>
      footer
    </>
  );
};

export default App;
