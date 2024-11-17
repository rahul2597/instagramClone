import React from "react";
import Button from "./button/Button";
import { useNavigate } from "react-router-dom";

const Dash = () => {
  const navigate = useNavigate();
  return (
    <section className="flex-col content-center w-screen h-screen">
      <div className="flex justify-center">
        <Button
          propStyle="w-[15%] p-3 sm:w-[20%] bg-green-500 sm:p-8 rounded-lg"
          textStyle="text-xs sm:text-base"
          name="Add Posts"
          onClick={() => navigate("/add-post")}
        />
      </div>
      <div className="flex justify-center mt-2">
        <Button
          propStyle="w-[15%] p-3 sm:w-[20%] bg-green-500 sm:p-8 rounded-lg"
          textStyle="text-xs text-center sm:text-base"
          name="Display All Posts"
          onClick={() => navigate("/all-posts")}
        />
      </div>
    </section>
  );
};

export default Dash;
