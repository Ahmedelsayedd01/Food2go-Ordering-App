import { Footer, Navbar } from './Components/Components';
import './index.css';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <div className='w-full bg-white flex flex-col items-center justify-between'>
      <Navbar />
      {/* Main Content Area */}
      <div className="w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
