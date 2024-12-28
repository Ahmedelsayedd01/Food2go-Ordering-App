import { Footer, Navbar } from './Components/Components';
import './index.css';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <div className='relative w-full bg-white flex flex-col items-center justify-between'>
      <div className="sticky top-0 w-full z-30">
        <Navbar />
      </div>
      {/* Main Content Area */}
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
