import React, { useEffect, useState } from "react";
import Button from "./button/Button";
import { useNavigate, useParams } from "react-router-dom";

const IndividualPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const fetchIndividualPost = async () => {
    try {
      const data = await fetch(
        `http://localhost:3000/api/posts/get-data/${id}`,
        {
          method: "GET",
        }
      );
      const response = await data.json();
      const { title, desc, image } = response.data[0];
      setTitle(title);
      setDesc(desc);
      setImage(image);
      console.log(response);
    } catch (err) {
      console.log("Error while fetching Individual Post : ", err);
    }
  };

  useEffect(() => {
    fetchIndividualPost();
  }, []);

  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <section className="w-[50%] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <section className="flex justify-center p-5">
          <section className="w-[40%]">
            <img src={`http://localhost:3000/${image}`} alt="post-image" />
          </section>
        </section>
        <article className="p-5 break-words">
          <p>{desc}</p>
        </article>
        <section className="flex justify-center">
          <Button
            propStyle="bg-green-500 p-3 rounded"
            name="Go back to all posts"
            onClick={() => navigate("/all-posts")}
          />
        </section>
      </section>
    </section>
  );
};

export default IndividualPost;
