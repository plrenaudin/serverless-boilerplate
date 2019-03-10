import PropTypes from "prop-types";

import "./index.less";

const Time = ({ now = Date.now() }) => (
  <div className="clock">
    The current time,
    <time>{new Date(now).toISOString()}</time>
  </div>
);

Time.propTypes = {
  now: PropTypes.number.isRequired
};

export default Time;
