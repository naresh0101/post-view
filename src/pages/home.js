import { useContext } from "react";
import { AppContext } from "../context";
import HomeLayout from "../layout/home";

const HomePage = () => {
  const { posts } = useContext(AppContext)

  return (
        <div>
          <HomeLayout posts={posts} />
        </div>
    )
}
export default HomePage;