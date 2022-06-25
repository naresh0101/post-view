import {  useState } from "react";
import Navbar from "../../components/navbar";
import Pagination from "../../components/pagination";
import Postcard from "../../components/postCard";


const HomeLayout = ({ posts }) => {
    const [page, setPage] = useState(1)
    const total = Math.floor(posts?.length / 10)

    // console.log( posts?.slice(page * 10, page * 10 + 10))
    return (
        <div>
            <Navbar />
            <br />
            <div className='main allpost-container'>
                {
                    posts?.slice(page * 10, page * 10 + 10)?.map((post, i) => {
                        return (
                            <Postcard page={page} post={post} key={i} />
                        )
                    })
                }
                <Pagination setPage={setPage} page={page} total={total} />
            </div>

        </div>
    )
}
export default HomeLayout;
