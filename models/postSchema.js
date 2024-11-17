import mongoose, { Schema } from "mongoose";

const post_schema = Schema({
  title: { type: String, required: [true, "pl enter title"] },
  desc: { type: String, required: [true, "pl enter the description"] },
  image: String,
});

const postSchema = mongoose.model("postSchema", post_schema);

export default postSchema;
