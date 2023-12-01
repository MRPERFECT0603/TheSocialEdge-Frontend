import "./Rightbar.scss"
import story1 from "../../assets/story1.jpg";
import story2 from "../../assets/story2.jpg";
import story3 from "../../assets/story3.jpg";
import story4 from "../../assets/story4.jpg";
import story5 from "../../assets/story5.jpg";
import story6 from "../../assets/story6.jpg";

const Rightbar = () => {
    return (
        <div className="rightbar">
            
            <div className="container">
                <div className="item">
                    <span>Suggestions for you.</span>
                    <div className="user">
                    <div className="userInfo">
                            <img src={story1} alt="" />
                            <span>Vivek Shaurya</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                    <div className="userInfo">
                            <img src={story6} alt="" />
                            <span>Anmol Verma</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities.</span>
                    <div className="user">
                    <div className="userInfo">
                            <img src={story5} alt="" />
                            <p>
                            <span>Ansh Mishra</span> changed their cover picture.
                            </p>
                            </div>
                            <span>1 min ago.</span>
                    </div>
                    <div className="user">
                            <div className="userInfo">
                            <img src={story3} alt="" />
                            <p>
                            <span>Vivek Shaurya</span> liked a picture.
                            </p>
                        </div>
                        <span>1 min ago.</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={story4} alt="" />
                            <p>
                            <span>Tanya Vashistha</span> liked a comment.
                            </p>
                            </div>
                            <span>1 min ago.</span>
                    </div>
                    <div className="user">
                            <div className="userInfo">
                            <img src={story2} alt="" />
                            <p>
                            <span>Bhavya Malik</span> posted
                            </p>
                        </div>
                        <span>1 min ago.</span>
                    </div>
                    
                </div>

               
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                            <div className="userInfo">
                            <img src={story1} alt="" />
                            <div className="online"/>
                            <span>Vivek Shaurya</span>
                            </div>
                    </div>
                    <div className="user">
                            <div className="userInfo">
                            <img src={story2} alt="" />
                            <div className="online"/>
                            <span>Bhavya Malik</span>
                            </div>
                    </div>
                    <div className="user">
                            <div className="userInfo">
                            <img src={story3} alt="" />
                            <div className="online"/>
                            <span>Raghu Solanki</span>
                            </div>
                    </div>
                    <div className="user">
                            <div className="userInfo">
                            <img src={story4} alt="" />
                            <div className="online"/>
                            <span>Tanya Vashistha</span>
                            </div>
                    </div>
                    <div className="user">
                            <div className="userInfo">
                            <img src={story5} alt="" />
                            <div className="online"/>
                            <span>Ansh Mishra</span>
                            </div>
                    </div>
                    <div className="user">
                            <div className="userInfo">
                            <img src={story6} alt="" />
                            <div className="online"/>
                            <span>Anmol Verma</span>
                            </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Rightbar