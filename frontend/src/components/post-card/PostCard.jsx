import React from "react";
import Button from "../button/Button";

const PostCard = ({
  titleId,
  title,
  titleDesc,
  fetchUpdatingData,
  deleteIndividualData,
}) => {
  return (
    <section className="flex items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ">
      <div className="grow">
        <p>{title}</p>
        <p>
          {titleDesc.length > 10
            ? titleDesc.substring(0, 20) + "..."
            : titleDesc}
        </p>
      </div>
      <div>
        <Button
          propStyle="bg-green-500 p-2 rounded"
          name="Update"
          onClick={() => {
            fetchUpdatingData(titleId);
          }}
        />
        <Button
          propStyle="bg-green-500 p-2 ml-2 rounded"
          name="Delete"
          onClick={() => {
            deleteIndividualData(titleId);
          }}
        />
      </div>
    </section>
  );
};

export default PostCard;
