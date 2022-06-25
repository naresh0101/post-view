
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './index.css'
import InfoCard from './infoCard';


const AutherInfo = ({ post, page }) => {
  const [open, setOpen] = useState(1);
  const [loading, setLoading] = useState(true)
  const [userinfo, setUserinfo] = useState(null)

  const handleClose = () => {
    setOpen(null);
  };

  useEffect(() => {
    setLoading(true)
    // the callback to useEffect can't be async, but you can declare async within
    async function fetchData() {
      // use the await keyword to grab the resolved promise value
      // remember: await can only be used within async functions!
      try {
        let auther = await axios.get(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)
        setUserinfo(auther?.data)
        setLoading(false)
      } catch (error) {
        console.log('error to fetch post data')
      }
      // update local state with the retrieved data 
      // setUsers(data);
    }
    // fetchData will only run once after mount as the deps array is empty 
    fetchData();
  }, [page,post?.userId]);

  return (
    <>
      <div className='cursor-pointer flex justify-between pb-10px'>
        <div onClick={() => { setOpen(post?.id) }} className='posted-by-user-info-wrapper'>
          <img className='avatar' src='https://i.pinimg.com/736x/31/ec/2c/31ec2ce212492e600b8de27f38846ed7.jpg' alt='avatr' />
          {loading ? <div className='skeleton'>
            <div className='primary-loading'></div>
            <div className='secondary-loading'></div>
          </div> : <div className='pl-10px'>
            <p className='primary-text'><b>{userinfo?.name}</b></p>
            <p className='secondary-text'>{userinfo?.username}</p>
          </div>}
        </div>
        <div>
          <button className="follow-btn">
            + Follow
          </button>
        </div>
      </div>
      <Modal
        onClose={handleClose}
        open={open === post?.id}
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          maxHeight: 600,
          maxWidth: 500,
          margin: 'auto',
          borderRadius: 10
        }}
      >
        <div className='child-of-modal'>
          <InfoCard userinfo={userinfo} />
        </div>
      </Modal>
    </>
  )
}

export default AutherInfo;