import React from "react";
import mouseEffect from "../../common/mouseEffect";

const Cursor = () => {
  React.useEffect(() => {
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
