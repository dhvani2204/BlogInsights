import React from 'react'
import { Button, Navbar, NavbarLink, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom' //go to a page whitjout refreshing
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

function Header() {
  return (
    <Navbar className='border-b-2'>
    <Link 
    to='/' 
    className='self-center whitespace-nowrap text-sm sm:text-xl 
    font-semibold dark:text-white'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
     via-purple-500 to-pink-500 rounded-lg text-white'>
        Blog
    </span>
    <span>Insights</span>
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
    <Link to='/sign-in'>
    <Button
    className='w-20 h-10' color='gray' pill   style={{
    background: 'linear-gradient(to right, #8A2BE2, #4169E1)', // Purple to Blue gradient
    color: 'white', 
    }}>
      Sign In
      </Button>
      </Link>
      </div>
    </Navbar>
  )
}
export default Header