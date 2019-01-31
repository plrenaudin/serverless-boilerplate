import Time from ".";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Time now={1548726138665} />).toJSON();
  expect(tree).toMatchSnapshot();
});
