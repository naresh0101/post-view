import './index.css';


const colorList = [
    "#3371FF",
    "#35068D",
    "#B9160C",
    "#2EB90C",
    "#E70CAE",
    "#B2071C",
];
function hexToRGB(hex, alpha) {
    try {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    } catch (error) {
        return hex;
    }
}
const getRandomBG = () => {
    return colorList[Math.floor(Math.random() * colorList.length)];
};
console.log(getRandomBG())

const Postcard = ({ post }) => {
    return (
        <div className='post-width-in-lg p-10px card'>
            <div className='flex justify-between pb-10px'>
                <div className='posted-by-user-info-wrapper'>
                    <img className='avatar' src='https://mintspace-media.fra1.digitaloceanspaces.com/wp-content/uploads/2022/01/18140402/FI7CtuCVgAMH2sD_mirror.jpg' alt='avatr' />
                    <div className='pl-10px'>
                        <p className='primary-text'><b>naresh0101</b></p>
                        <p> {post?.title}</p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div>
            </div>

            <div
                style={{ background: hexToRGB(getRandomBG(), 0.50) }}
                className='p-10px br-10px colored-bg'>
                <h3>
                    {post?.body}
                </h3>
            </div>
            <div className='login-input input-wrapper mt-10px responsive-input'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <input type={'text'} placeholder='Add your comment' className='pl-10px' />
            </div>
        </div>
    )
}

export default Postcard;