import React, { useEffect, useState } from "react";
import PostForm from "./post-form/PostForm";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState({}); // should store a file type.
  const [msg, setMsg] = useState({ status: "", resp: "" });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const addData = async (e) => {
    e.preventDefault();
    //create a new form
    const form = new FormData();
    form.append("title", title);
    form.append("desc", desc);
    form.append("image", image);
    try {
      const data = await fetch("http://localhost:3000/api/posts/create-post", {
        method: "POST",
        body: form,
      });
      const { msg } = await data.json();
      setMsg({ status: "success", resp: msg });
      setShowAlert(true);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if(showAlert == true){
        setShowAlert(false);
        navigate("/all-posts")
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  return (
    <PostForm
      postType="ADD - POST"
      title={title}
      desc={desc}
      image={image}
      setTitle={setTitle}
      setDesc={setDesc}
      setImage={setImage}
      submitData={addData}
      msg={msg}
      showAlert={showAlert}
    />
  );
};

export default AddPost;
