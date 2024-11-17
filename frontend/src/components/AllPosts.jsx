import React, { useEffect, useState } from "react";
import PostCard from "./post-card/PostCard";
import { useNavigate } from "react-router-dom";
import Alert from "./alert/Alert";
import Button from "./button/Button";
import { FormButton } from "./props/FormButton";

const AllPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({ status: "", resp: "" });
  const [showAlert, setShowAlert] = useState(false);

  const fetchAllPosts = async () => {
    setIsLoading(true);
    const data = await fetch("http://localhost:3000/api/posts/all", {
      method: "GET",
    });
    setIsLoading(false);
    //return promise data
    const response = await data.json();
    setPosts(response.posts);
    console.log("All data : ", response);
  };

  // to populate the form data
  const fetchUpdatingData = async (post_id) => {
    const data = await fetch(
      `http://localhost:3000/api/posts/get-data/${post_id}`,
      {
        method: "GET",
      }
    );
    const response = await data.json();
    navigate(`/update-post/${response.data[0]._id}`, {
      state: response.data[0],
    });
    console.log(response);
  };

  // go to individual posts with individual id
  const fetchIndividualData = async (post_id) => {
    navigate(`/post/${post_id}`);
  };

  const deleteIndividualData = async (post_id) => {
    try {
      const data = await fetch(
        `http://localhost:3000/api/posts/delete-post/${post_id}`,
        { method: "DELETE" }
      );
      const { msg } = await data.json();
      // console.log("Deleted data : ", response);
      setMsg({ status: "success", resp: msg });
      setShowAlert(true);
    } catch (err) {
      console.log("Error while deleting the data : ", err);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (showAlert) {
        setShowAlert(false);
        window.location.reload();
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <section className="h-screen w-screen">
      <section>
        <div className="flex flex-row justify-center p-4">
          <h1>ALL - POSTS</h1>
        </div>
        <div className="flex justify-center">
          <Button
            propStyle={FormButton.propsStyle}
            name="Go to Add Posts"
            onClick={() => navigate("/add-post")}
          />
        </div>
        <div className="flex justify-center py-2">
          {msg.status == "success" && showAlert ? <Alert msg={msg} /> : ""}
        </div>
        {isLoading ? (
          <h1 className="text-xl text-center text-red-600">Loading...</h1>
        ) : (
          posts?.map((post) => (
            <div
              key={post._id}
              className="px-5 mt-5"
              onClick={() => fetchIndividualData(post._id)}
            >
              <PostCard
                titleId={post._id}
                title={post.title}
                titleDesc={post.desc}
                fetchUpdatingData={fetchUpdatingData}
                deleteIndividualData={deleteIndividualData}
              />
            </div>
          ))
        )}
      </section>
    </section>
  );
};

export default AllPosts;
