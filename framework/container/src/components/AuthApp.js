import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "authApp/Auth";

export default () => {
  const ref = useRef(null);
  // Copy for Browser History
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        const nextPathname = location?.pathname;
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref} />;
};
