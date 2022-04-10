import NavBar from '../src/Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import { GetAdminClient} from './Services/Auth'
import NavBarAdm from './Components/NavBar/NavBarAdm'
export default function NavBarRoutes(){
    const admin=  GetAdminClient()
    return(
        <>
            {admin===null  || admin==='User'?(
         <NavBar></NavBar>
       
        ):(
          <>
          <SideBar></SideBar>
          <NavBarAdm></NavBarAdm>
          </>
        )}
        </>
    )
}