import { useState } from 'react'
import { Hamburger } from '../Header/HeaderStyle'
import { HeaderNav, HeaderLink } from '../Header/HeaderStyle'
import { Button } from '../../utils/styles/generalStyles'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [mobileNavbar, setMobileNavbar] = useState(false);

  const mobile = window.innerWidth <= 1024 ? true : false;

  return (

    <>

      {mobileNavbar === false && mobile === true ? (
        <Hamburger onClick={() => setMobileNavbar(true)} />) : (
        <HeaderNav>

          <HeaderLink onClick={() => setMobileNavbar(false)} to="/" $isActive={(match) => match.url === '/'}>Home</HeaderLink>


          <HeaderLink onClick={() => setMobileNavbar(false)} to="/courses" $isActive={(match) => match.url === '/courses'}>Courses</HeaderLink>

          <HeaderLink onClick={() => setMobileNavbar(false)} to="/profile" $isActive={(match) => match.url === '/profile'}>Profile</HeaderLink>

          <Link to="/login">
            <Button isOutline mobitel onClick={() => navigate("/login")}>Sign in</Button>
          </Link>

          <Link to="/register">

            <Button isOutline={false} mobitel onClick={() => navigate("/register")}>Register</Button>
          </Link>



        </HeaderNav>)}

    </>
  )
}

export default Navbar