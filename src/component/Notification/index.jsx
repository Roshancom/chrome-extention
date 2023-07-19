import React from "react";
import { GrClose } from "react-icons/gr";

const Notification = () => {
  const [show, setSow] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setSow(false);
    }, 1000);
  }, []);

  if (!show) return null;
  return (
    <div className="notification">
      <div className="message">
        Group Saved
      </div>
      <div className="close">
        <GrClose />
      </div>
    </div>
  );
};

export default Notification;
