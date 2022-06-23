
import './index.css';

const Login = () => {
    return (
        <div className="loginwrapper">
            <div className='card p-1rem'>
                <div className='login-elementx-box'>
                    <h2 className='pb-10px'>Welcome back</h2>
                    <br/>
                    <br/>
                    <div className='pb-10px'>
                        <p>Email</p>
                        <div className='login-input input-wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <input type={'email'} placeholder='youremail@gmail.com' className='pl-10px' />
                        </div>
                    </div>

                    <div>
                        <p>Password</p>
                        <div className='login-input input-wrapper'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                            <input type={'password'} placeholder='your-password' className='pl-10px'  />
                        </div>
                    </div>
                    <br/>
                    <button className='login-btn'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login; 