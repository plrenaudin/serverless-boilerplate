import { model, findAll, findById, create, edit, deleteOne } from ".";
import mongoose from "mongoose";
mongoose.connect = jest.fn(() => Promise.resolve({ connections: [{ readyState: true }] }));

beforeAll(() => {
  model.find = jest.fn();
  model.findById = jest.fn(() => ({ exec: () => {} }));
  model.create = jest.fn();
  model.update = jest.fn();
  model.deleteOne = jest.fn();
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("user DAO", () => {
  it("finds all users", async () => {
    await findAll();
    expect(model.find).toHaveBeenCalled();
  });

  it("finds user by id", async () => {
    await findById(3);
    expect(model.findById).toBeCalledWith(3);
  });

  it("creates the user", async () => {
    await create({ name: "plop", age: 23 });
    expect(model.create).toBeCalled();
  });

  it("edits the user", async () => {
    const payload = { name: "plop", age: 44 };
    await edit(1, payload);
    expect(model.update).toBeCalledWith({ _id: 1 }, payload);
  });

  it("deletes the user", async () => {
    await deleteOne(1);
    expect(model.deleteOne).toBeCalledWith({ _id: 1 });
  });

  it("doesn't deletes the user if no id passed", async () => {
    await deleteOne(undefined);
    expect(model.deleteOne).not.toBeCalled();
  });

  it("doesn't edits the user if no id passed", async () => {
    const payload = { name: "plop", age: 44 };
    await edit(undefined, payload);
    expect(model.update).not.toBeCalled();
  });
});

describe("schema validation", () => {
  it("validates the user", () => {
    const result = new model({ name: "plop", age: 22 });
    expect(result.validateSync()).toBeUndefined();
  });

  it("doesn't validate the user if no age", () => {
    const result = new model({ name: "plop" });
    expect(result.validateSync()).toBeDefined();
  });

  it("doesn't validate the user if no name", () => {
    const result = new model({ age: 22 });
    expect(result.validateSync()).toBeDefined();
  });
});
