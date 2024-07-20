import { auth } from "../lib/firebase";
import "./detail.css";

const Detail = () => {
  return (
    <div className='detail'>
      <div className='user'>
        <img src="./avatar.png" alt="avatar"/>
        <h2>SK</h2>
        <p>hi this is sk, 9047421809</p>
      </div>
      
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="arrow up"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy and Help</span>
            <img src="./arrowUp.png" alt="arrow up"/>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="arrow down"/>
          </div>
          
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img 
              src="./avatar.png" 
              alt="avatar"
              />
              <span>photo_2024_2.png</span>
              </div>
                    <img src="./download.png" alt="download" className="icon"/>
                    </div>
                <div className="photoItem">
              <div className="photoDetail">
              <img src="./avatar.png" alt="avatar"/>
              <span>photo_2024_2.png</span>
              </div>
                    <img src="./download.png" alt="download" className="icon"/>
                    </div> <div className="photoItem">
              <div className="photoDetail">
              <img src="./avatar.png" alt="avatar"/>
              <span>photo_2024_2.png</span>
              </div>
                    <img src="./download.png" alt="download" className="icon"/>
                    </div> <div className="photoItem">
              <div className="photoDetail">
              <img src="./avatar.png" alt="avatar"/>
              <span>photo_2024_2.png</span>
              </div>
                    <img src="./download.png" alt="download" className="icon"/>
                    </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="arrow up"/>
          </div>
        </div>
    </div>
    <button>Block User</button>
    <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
    </div>
  );
}

export default Detail;
