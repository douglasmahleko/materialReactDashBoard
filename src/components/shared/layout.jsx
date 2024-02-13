import { Outlet } from 'react-router-dom';

function Layout(){
    return(
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <div className="bg-sky-200">sidebar</div>
            <div className="bg-teal-200">header</div>
            <div> { <Outlet /> } </div>
            <p>footer</p>
        </div>
    )
}export default Layout