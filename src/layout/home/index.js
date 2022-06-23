import Navbar from "../../components/navbar";
import Postcard from "../../components/postCard";


const HomeLayout = ({posts}) => {
    return (
        <div>
            <Navbar />
            <br />
            <div className='main allpost-container'>
                {
                    posts?.map((post, i) => {
                        return (
                            <Postcard post={post} key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default HomeLayout;
