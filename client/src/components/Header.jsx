import React from 'react'
import { Button, Dropdown, Navbar, NavbarLink, TextInput, Avatar } from 'flowbite-react'
import { Link,useLocation } from 'react-router-dom' //go to a page whitjout refreshing
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import {useSelector} from 'react-redux'

function Header() {
  const path=useLocation().pathname;
  const {currentUser}=useSelector(state => state.user);
  return (
    <Navbar className='border-b-2'>
    <Link 
    to='/' 
    className='self-center whitespace-nowrap text-sm sm:text-xl 
    font-semibold dark:text-white'>
    <span>Blog</span>
    <span className='px-2 py-1 bg-gradient-to-r from-blue-500 to-indigo-900 rounded-lg text-white'>
        Insights
    </span>
    </Link>

    <form className=' flex justify-center items-center space-x-4 flex-grow'>
    <TextInput
      type='text'
      placeholder='Search...'
      rightIcon={AiOutlineSearch}
      className='hidden lg:inline w-48 mr-2'
    />
  <Button  className='w-12 h-10 lg:hidden'  color='gray' pill>
      <AiOutlineSearch />
    </Button>
    </form>
    <Navbar.Collapse className='flex justify-center items-center space-x-4 flex-grow'>
    <Navbar.Link as={Link} to="/" className='text-gray-700'>
      Home
    </Navbar.Link>
    <span className='text-gray-400 mx-2'>|</span>
    <Navbar.Link as={Link} to="/about" className='text-gray-700'>
      About
    </Navbar.Link>
    <span className='text-gray-400 mx-2'>|</span>
    <Navbar.Link as={Link} to="/projects" className='text-gray-700'>
      Projects
    </Navbar.Link>
    <span className='text-gray-400 mx-2'>|</span>
  </Navbar.Collapse>

  <div className='flex gap md:order-2'>
    <Button color='gray' pill className='w-10 h-10 sm:inline'>
        <FaMoon />
    </Button>
    <span className='mx-2'></span>
    {currentUser?(
      <Dropdown>
      arrowIcon={false}
      inline
      label={
        <Avatar
        alt='user'
        img={currentUser.profilePicture}
        rounded
        />
      }
      <Dropdown.Header>
      <span className='block text-sm'>@{currentUser.username}</span>
      <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
      </Dropdown.Header>
      <Link to={'/dashboard?tab=profile'}>
      <Dropdown.Item>
      Profile
      </Dropdown.Item>
      </Link>
      <Dropdown.Divider/>
      <Dropdown.Item>
      Sign out
      </Dropdown.Item>
      </Dropdown>
    ):
      (
        <Link to='/sign-in'>
    <Button
    className='w-20 h-10 rounded-full' color='gray' pill   style={{
    background: 'linear-gradient(to right, #ADD8E6,#00008B)', // light to dark Blue gradient
    color: 'white', 
    display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: '999px',
        lineHeight: '1'
    }}>
      Sign In
      </Button>
      </Link>
      )
    }
    
      </div>
    </Navbar>
  )
}
export default Header