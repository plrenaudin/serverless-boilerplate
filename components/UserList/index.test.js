import renderer from "react-test-renderer";
import UserList from ".";

it("renders correctly", () => {
  const users = [
    { _id: 1, name: "Mickey", age: 15 },
    { _id: 2, name: "Dan", age: 25 },
    { _id: 3, name: "John", age: 42 }
  ];
  const tree = renderer.create(<UserList users={users} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly without data", () => {
  const users = [];
  const tree = renderer.create(<UserList users={users} />).toJSON();
  expect(tree).toMatchSnapshot();
});
