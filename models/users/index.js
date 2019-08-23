import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

import model from "./model";

const findAll = () => model.find();
const findById = id => model.findById(id).exec();
const create = ({ name, age }) => model.create({ name, age });
const edit = (_id, { name, age }) => model.update({ _id }, { name, age });
const deleteOne = _id => model.deleteOne({ _id });

export { findAll, findById, create, edit, deleteOne };
