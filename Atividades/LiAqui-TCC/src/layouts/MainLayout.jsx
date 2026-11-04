
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from 'react-router';


function MainLayout () { 

    
return (
    <div className="flex min-h-screen flex-col pt-16">
      <Header />
      <Outlet />
      <Footer />
    </div>
)

}



export default MainLayout
