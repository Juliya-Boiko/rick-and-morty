import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className='shared-layout'>
      <Outlet />
    </div>
  )
};

export default SharedLayout;