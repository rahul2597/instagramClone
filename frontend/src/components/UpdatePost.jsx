import { useLocation, useNavigate, useParams } from "react-router-dom";
import PostForm from "./post-form/PostForm";
import { useEffect, useState } from "react";

const UpdatePost = () => {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;

  const [title, setTitle] = useState(data?.title);
  const [desc, setDesc] = useState(data?.desc);
  const [image, setImage] = useState({});
  const [msg, setMsg] = useState({ status: "", resp: "" });
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const updatePost = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("desc", desc);
    form.append("image", image);
    console.log("id", id);
    try {
      const data = await fetch(
        `http://localhost:3000/api/posts/update-post/${id}`,
        {
          method: "PATCH",
          body: form,
        }
      );
      const {msg} = await data.json();
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
      postType="UPDATE - TODO"
      title={title}
      desc={desc}
      image={image}
      setTitle={setTitle}
      setDesc={setDesc}
      setImage={setImage}
      submitData={updatePost}
      msg={msg}
      showAlert={showAlert}
    />
  );
};

export default UpdatePost;
