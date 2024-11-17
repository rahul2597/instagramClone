import React from "react";
import Button from "../button/Button";
import Label from "../label/Label.jsx";
import { labelCss } from "../props/Label.js";
import Input from "../input/Input.jsx";
import { InputPropsFile, InputPropsTitle } from "../props/InputProps.js";
import { TextAreaProps } from "../props/TextArea.js";
import { FormButton } from "../props/FormButton.js";
import Alert from "../alert/Alert.jsx";
import { Link } from "react-router-dom";

const PostForm = ({
  postType,
  title,
  image,
  desc,
  setTitle,
  setDesc,
  setImage,
  submitData,
  msg,
  showAlert,
  loading,
}) => {
  return (
    <div class="w-screen h-screen flex flex-col justify-center items-center">
      {msg.status == "success" && showAlert ? <Alert msg={msg} /> : ""}
      <form
        class="w-full sm:w-[40%] h-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={submitData}
      >
        <h1 className="text-center p-3">{postType}</h1>
        <div class="mb-4">
          <Label propsStyle={labelCss.propsStyle} name="Title : " />
          <Input
            propsStyle={InputPropsTitle.propsStyle}
            type={InputPropsTitle.type}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p class="mt-2 text-sm text-red-500">
            <span class="text-xs">
              Please enter the title no more than 20 characters
            </span>
          </p>
        </div>
        <div class="mb-6">
          <Label propsStyle={labelCss.propsStyle} name="Post Description" />
          <div class="relative w-full min-w-[200px]">
            <textarea
              class={TextAreaProps.propsStyle}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              maxLength="40"
              required
            />
            <p class="mt-2 text-sm text-red-500">
              <span class="text-xs">
                Please enter the description no more than 40 characters
              </span>
            </p>
          </div>
        </div>
        <div className="mb-6">
          <Input
            propsStyle={InputPropsFile.propsStyle}
            type={InputPropsFile.type}
            value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="mb-6">
          {loading ? <Alert msg="Adding the data" /> : ""}
        </div>
        <div class="flex w-full justify-center">
          {/* <Button
            propStyle={FormButton.propsStyle}
            onClick={submitData}
            name="Submit Post"
          /> */}
          <Input
            propsStyle={FormButton.propsStyle}
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <p class="mt-2 text-sm text-red-900">
        <span class="text-xs">
          <Link to="/all-posts">
            {postType == "ADD - POST"
              ? "Don't you want to add data? Go to all posts"
              : "Don't you want to update data? Go to all posts"}
          </Link>
        </span>
      </p>
    </div>
  );
};

export default PostForm;
