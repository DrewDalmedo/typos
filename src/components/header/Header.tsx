import React from "react";

const Header = (props: {text?: string}) => {
  return (
    <div className="header">
      {/* if props.text isn't undefined render whatever was passed, otherwise render "typos" */}
      <h1>{props.text ? props.text : "typos"}</h1>
    </div>
  );
}

export default Header;