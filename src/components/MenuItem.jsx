import React from "react";

function MenuItem(props) {
  const { icon: Icon, text, ...restProps } = props;
  return (
    <button className="btn border-none shadow-none justify-start gap-2 w-full hover:opacity-20">
      <Icon {...restProps} />
      {text}
    </button>
  );
}

export default MenuItem;
