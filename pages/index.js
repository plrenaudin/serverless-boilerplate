import Time from "../components/Time";
import Layout from "../components/Layout";

const Index = ({ now }) => (
  <Layout>
    <h1>
      Hello you! <Time {...{ now }} />
    </h1>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const host = req ? req.headers.host : window.location.host;
  const url = `http://${host}/api/time`;
  let now;
  try {
    const res = await fetch(url);
    if (res.ok) {
      now = (await res.json()).now;
    } else {
      console.log(`res not ok from ${url}`);
    }
  } catch (err) {
    console.error(`Could not fetch time from ${url}`, err.message);
  }
  return { now };
};

export default Index;
