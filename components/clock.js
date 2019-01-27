import React from "react";
import "isomorphic-unfetch";

const Clock = ({ now }) => (
  <div className="clock">
    The current time,
    <time>{now}</time>
  </div>
);

export default Clock;
