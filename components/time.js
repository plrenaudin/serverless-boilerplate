import "isomorphic-unfetch";

const Time = ({ now }) => (
  <div className="clock">
    The current time,
    <time>{now}</time>
  </div>
);

export default Time;
