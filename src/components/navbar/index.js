import './index.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='flex justify-between'>
                <div className='logo-wrapper'>
                    <img className='logo' alt='logo' src='https://cdn3.vectorstock.com/i/thumb-large/26/47/writer-logo-vector-6272647.jpg' />
                </div>
                <div className='flex align-items-center'>
                    <form>
                        <div className='input-wrapper search-input responsive-input'>
                            <input type={'text'} placeholder='Search for the post' className='pl-10px' />
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </form>
                </div>
                <div className='profile-wrapper flex align-items-center'>
                    <img className='avatar' src='https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2022/01/18140402/FI7CtuCVgAMH2sD_mirror.jpg' alt='avatr' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;