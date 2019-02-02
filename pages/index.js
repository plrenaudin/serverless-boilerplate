import Time from "../components/Time";
import fetcher from "../modules/fetcher";

const Index = ({ now }) => (
  <h1>
    Hello you! <Time {...{ now }} />
  </h1>
);

Index.getInitialProps = async ({ req }) => {
  let { now } = await fetcher({ req, url: "/api/time" });

  return { now };
};

export default Index;
