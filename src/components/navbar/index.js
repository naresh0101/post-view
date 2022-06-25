import {  useContext, useState } from 'react';
import { AppContext } from '../../context';
import './index.css';

const Navbar = () => {
    const { postsMasterData, setPosts } = useContext(AppContext)
    const [searchFor, setSearchFor] = useState('')

    const handleChange = (e) => {
        let { value } = e.target
        setSearchFor(value)
        if(value===''){
         setPosts(postsMasterData)
         return
        }
        let result = postsMasterData?.filter((item)=>item?.title.toLowerCase().includes(value?.toLowerCase()) || item?.body.toLowerCase().includes(value?.toLowerCase()))
        setPosts(result)
    }

    const logout = ()=>{
        localStorage.removeItem('token')
        return window.location.href = '/login'
    }

    return (
        <div className='navbar'>
            <div className='flex justify-between'>
                <div className='logo-wrapper'>
                    <img className='logo' alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3p27M7--NHdUTD00oyjPe4-Gm7eApIqN3uNC7gppUFKYay4_HDgcAswKhq1mSIfehGz0&usqp=CAU' />
                </div>
                <div className='flex align-items-center'>
                    <div className='input-wrapper search-input responsive-input'>
                        <input value={searchFor} onChange={handleChange} type={'text'} placeholder='Search for the post' className='pl-10px' />
                        {searchFor === '' ?
                            <button type='submit' className='icon-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            :
                            <button onClick={() => { setSearchFor('') }} className='icon-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        }
                    </div>
                </div>
                <div className='profile-wrapper flex align-items-center'>
                    <button onClick={logout} className='logout-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;