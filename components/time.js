import "isomorphic-unfetch";

const Time = ({ now }) => (
  <div className="clock">
    The current time,
    <time>{new Date(now).toISOString()}</time>
  </div>
);

export default Time;
