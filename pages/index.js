import PropTypes from "prop-types";
import Time from "../components/Time";
import fetcher from "../modules/fetcher";

const Index = ({ now }) => (
  <h1>
    Hello you! <Time {...{ now }} />
  </h1>
);

Index.propTypes = {
  now: PropTypes.number.isRequired
};

Index.getInitialProps = async ({ req }) => {
  const { now } = (await fetcher({ req, url: "/api/time" })) || { now: null };

  return { now };
};

export default Index;
