

const InfoCard = ({ userinfo }) => {
    return <div className="info-card p-10px">
        <div className="card p-10px">
            <div className="avatar-wrapper pb-10px">
                <img className='user-avatar' src='https://i.pinimg.com/736x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg' alt='avatr' />
                <div className="ml-10px">
                    <h2 className="primary-text">{userinfo?.name}</h2>
                    <h6 className="secondary-text">Email : {userinfo?.email}</h6>
                    <h6 className="secondary-text">Phone : {userinfo?.phone}</h6>
                </div>
            </div>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-10px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="primary-text"> Address</p>
            </div>
            <div className="grid-2 mt-10px">
                <div className="mb-10px">
                    <p className="secondary-text">Street</p>
                    <p>{userinfo?.address?.street}</p>
                </div>
                <div className="mb-10px">
                    <p className="secondary-text">Suite</p>
                    <p>{userinfo?.address?.suite}</p>
                </div>
                <div className="mb-10px">
                    <p className="secondary-text">City</p>
                    <p>{userinfo?.address?.city}</p>
                </div>
                <div className="mb-10px">
                    <p className="secondary-text">Zipcode</p>
                    <p>{userinfo?.address?.zipcode}</p>
                </div>
            </div>
        </div>

        <div className="card mt-10px p-10px">
            <div className="flex justify-between">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-10px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="primary-text">Company</p>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon mr-10px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a target={'_blank'} href={userinfo?.website} className="website">{userinfo?.website}</a>
                </div>
            </div>
            <div className="grid-2 mt-10px">
                <div className="mb-10px">
                    <p className="secondary-text">Name</p>
                    <p>{userinfo?.company?.name}</p>
                </div>
                <div className="mb-10px">
                    <p className="secondary-text">CatchPhrase</p>
                    <p>{userinfo?.company?.catchPhrase}</p>
                </div>
                <div className="mb-10px">
                    <p className="secondary-text">BS</p>
                    <p>{userinfo?.company?.bs}</p>
                </div>

            </div>
        </div>
    </div>
}

export default InfoCard;