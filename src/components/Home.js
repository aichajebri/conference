import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Post from "./Post";
function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="header">
        <img
          className="headerImg"
          src="https://www.osce.org/files/imagecache/10_large_gallery/f/images/hires/6/8/527127.jpg?1664548700"
        />
      </div>
      <div className="posts">
        <Post img="https://www.incimages.com/uploaded_files/image/1920x1080/getty_532256991_186621.jpg" />
        <Post img="https://www.davidparrish.com/wp-content/uploads/2014/05/David-Parrish-EVCOM.jpg" />
        <Post img="https://s31606.pcdn.co/wp-content/uploads/2019/08/business-people-listening-to-the-speaker-at-a-conference-picture-id1039606566.jpg" />
      </div>
      <div className="banner">
        <img
          className="banner"
          src="https://www.osce.org/files/imagecache/10_large_gallery/f/images/hires/6/8/527127.jpg?1664548700"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
