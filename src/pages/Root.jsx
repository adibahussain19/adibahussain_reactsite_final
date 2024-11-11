import { Outlet } from 'react-router-dom';
import MyNavbar from '../components/MyNavbar.jsx';

function RootLayout(){
    return (
        <>
            <div id="body">
                <MyNavbar/>
                <Outlet/>
            </div>
        </>
    )
}

export default RootLayout;