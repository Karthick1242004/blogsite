import React, { useState } from 'react';
import Mo from './Main.module.css';
import Profile from '../../assets/svg/avt1.svg';

function Main() {
  const [date, setDate] = useState(
    new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  );

  return (
    <div className={Mo.globe}>
      <div className={Mo.content}>
        <div className={Mo.details}>
          <div className={Mo.userdetails}>
            <img src={Profile} alt="Profile Image" className={Mo.avatar}/>
            <p>Jayanth babu S <span1>in</span1> Level Up Coding . <span1>{date}</span1></p>
          </div>
          <h1>4 useState Mistakes You Should Avoid in React🚫</h1>
          <p className={Mo.blogcontent}>Introduction React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, useState, is fundamental but ....</p>
          <div className={Mo.topic}>
            <p className={Mo.topicname}>Java Script</p>
            <p className={Mo.readtime}>18 min read . </p>
          </div>
        </div>
        <div className={Mo.photo}>
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YiZksL8bfzbVmq0DM3JHpw.png" alt="Blogimage" className={Mo.blogimage}/>
        </div>
      </div>
      <div className={Mo.content}>
        <div className={Mo.details}>
          <div className={Mo.userdetails}>
            <img src={Profile} alt="Profile Image" className={Mo.avatar}/>
            <p>Jayanth babu S <span1>in</span1> Level Up Coding . <span1>{date}</span1></p>
          </div>
          <h1>4 useState Mistakes You Should Avoid in React🚫</h1>
          <p className={Mo.blogcontent}>Introduction React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, useState, is fundamental but ....</p>
          <div className={Mo.topic}>
            <p className={Mo.topicname}>Java Script</p>
            <p className={Mo.readtime}>18 min read . </p>
          </div>
        </div>
        <div className={Mo.photo}>
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YiZksL8bfzbVmq0DM3JHpw.png" alt="Blogimage" className={Mo.blogimage}/>
        </div>
      </div>
      <div className={Mo.content}>
        <div className={Mo.details}>
          <div className={Mo.userdetails}>
            <img src={Profile} alt="Profile Image" className={Mo.avatar}/>
            <p>Jayanth babu S <span1>in</span1> Level Up Coding . <span1>{date}</span1></p>
          </div>
          <h1>4 useState Mistakes You Should Avoid in React🚫</h1>
          <p className={Mo.blogcontent}>Introduction React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, useState, is fundamental but ....</p>
          <div className={Mo.topic}>
            <p className={Mo.topicname}>Java Script</p>
            <p className={Mo.readtime}>18 min read . </p>
          </div>
        </div>
        <div className={Mo.photo}>
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YiZksL8bfzbVmq0DM3JHpw.png" alt="Blogimage" className={Mo.blogimage}/>
        </div>
      </div>
    </div>
  );
}

export default Main;
