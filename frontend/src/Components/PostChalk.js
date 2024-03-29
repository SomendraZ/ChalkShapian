import React, { useState, useEffect, useCallback } from "react";
import "../CSS/PostChalk.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";
import { useNavigate } from "react-router-dom";

const PostChalk = () => {
  const navigate = useNavigate()
  const [isImage, setIsImage] = useState(true);
  const [PostChalkImage, setPostChalkImage] = useState("contChalkImage");
  const [PostChalkVideo, setPostChalkVideo] = useState("contChalkVideo");
  
  const changePostChalkImage = useCallback(() => {
    setIsImage(true)
    navigate('/post/image')
    setPostChalkImage("contChalkImage");
    setPostChalkVideo("contChalkVideo");
  }, [navigate]);

  const changePostChalkVideo = useCallback(() => {
    navigate('/post/video')
    setIsImage(false)
    setPostChalkImage("contChalkVideo");
    setPostChalkVideo("contChalkImage");
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [changePostChalkImage, changePostChalkVideo]);

  return (
    <>
    <Navbar />
      <div id="name">
        <div className="postBar">
          <div className="postYourChalk">Post Your “CHALK”</div>
          <div className="lolala">
            <div className={PostChalkImage} id="image" onClick={changePostChalkImage}>
              Image
            </div>
            <div className={PostChalkVideo} id="video" onClick={changePostChalkVideo}>
              Video
            </div>
          </div>
        </div>
        {isImage ? <ImagePost/> : <VideoPost/>}
      </div>
      <Footer />
    </>
  );
};

export default PostChalk;
