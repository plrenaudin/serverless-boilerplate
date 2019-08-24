import model from "./model";
import db from "models/db";

const findAll = async () => {
  await db();
  return model.find();
};

const findById = async id => {
  await db();
  return model.findById(id).exec();
};

const create = async ({ name, age }) => {
  await db();
  return model.create({ name, age });
};

const edit = async (_id, { name, age }) => {
  await db();
  return model.update({ _id }, { name, age });
};
const deleteOne = async _id => {
  await db();
  return model.deleteOne({ _id });
};

export { findAll, findById, create, edit, deleteOne };
