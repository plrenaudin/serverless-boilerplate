import "./index.less";

const Time = ({ now = Date.now() }) => (
  <div className="clock">
    The current time,
    <time>{new Date(now).toISOString()}</time>
  </div>
);

export default Time;
