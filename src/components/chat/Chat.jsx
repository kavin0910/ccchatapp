import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import{ useRef, useEffect } from 'react';


const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef= useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behaviour:"smooth"});
  },[])

  const handleEmoji = (e) => {
   setText((prev)=>prev+e.emoji);
   setOpen(false)
  };

  console.log(text)

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Sk</span>
            <p>hi hellow</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
            <p>m;kdfkndfh;nlsdnhndglndlngdngaobgavoh</p>
            <span>1 min ago</span>
        </div>
        </div>

        <div className="message own">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
            <p>m;kdfkndfh;nlsdnhndglndlngdngaobgavoh</p>
            <span>1 min ago</span>
        </div>
        </div>
        <div className="message">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
            <p>m;kdfkndfh;nlsdnhndglndlngdngaobgavoh</p>
            <span>1 min ago</span>
        </div>
        </div>
    
        <div className="message own">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
            <p>m;kdfkndfh;nlsdnhndglndlngdngaobgavoh</p>
            <span>1 min ago</span>
        </div>
        </div>
        <div className="message">
            <img src="./avatar.png" alt=""/>
            <div className="texts">
            <img src="https://www.bing.com/images/search?view=detailV2&ccid=%2fGCVhLmC&id=0B6A3D6D6A3096C200F14AB414D3AA2A4A3CA5AD&thid=OIP._GCVhLmCRPm_W4TOyBrIuQHaEK&mediaurl=https%3a%2f%2fwallpaperaccess.com%2ffull%2f155161.jpg&exph=2160&expw=3840&q=cars&simid=608045049260504315&FORM=IRPRST&ck=075CAF597891F73C284623710764F4F9&selectedIndex=3&itb=0&ajaxhist=0&ajaxserp=0"/>
            <p>m;kdfkndfh;nlsdnhndglndlngdngaobgavoh</p>
            <span>1 min ago</span>
        </div>
        </div>
        <div ref={endRef}></div>
        </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
          <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
          {open && <EmojiPicker onEmojiClick={handleEmoji} />}
          </div>
          
        </div>
        </div>
        </div>
        <div className="textbox">
        <input type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        </div>
       
        <button className="SendButton">Send</button>
     
    </div>
  );
};

export default Chat;
