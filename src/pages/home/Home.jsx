import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home