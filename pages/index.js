import Time from "../components/Time";

const Index = ({ now }) => (
  <h1>
    Hello you! <Time {...{ now }} />
  </h1>
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
