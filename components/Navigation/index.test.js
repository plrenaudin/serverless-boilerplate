import Navigation from ".";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Navigation />).toJSON();
  expect(tree).toMatchSnapshot();
});
