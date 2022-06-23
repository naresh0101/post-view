import { useContext, useState } from 'react';
import { AppContext } from '../../context';
import './index.css';

const Navbar = () => {
    const { postsMasterData, setPosts } = useContext(AppContext)
    const [searchFor, setSearchFor] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // let result = postsMasterData?.filter((item)=>{
        //     item.title
        // })
        // console.log('find fdata')
    }

    const handleChange = (e) => {
        let { value } = e.target
        setSearchFor(value)
    }

    return (
        <div className='navbar'>
            <div className='flex justify-between'>
                <div className='logo-wrapper'>
                    <h3>PV</h3>
                    {/* <img className='logo' alt='logo' src='https://cdn3.vectorstock.com/i/thumb-large/26/47/writer-logo-vector-6272647.jpg' /> */}
                </div>
                <div className='flex align-items-center'>
                    <div className='input-wrapper search-input responsive-input'>
                        <form className='w-full' onSubmit={handleSubmit}>
                            <input value={searchFor} onChange={handleChange} type={'text'} placeholder='Search for the post' className='pl-10px' />
                        </form>
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
                    <img className='avatar' src='https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2022/01/18140402/FI7CtuCVgAMH2sD_mirror.jpg' alt='avatr' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;