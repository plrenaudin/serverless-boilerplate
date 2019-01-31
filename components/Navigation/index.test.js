import Layout from ".";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Layout>
        <div>Children content</div>
      </Layout>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
