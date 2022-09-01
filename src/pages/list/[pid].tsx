import React from "react";
import { useRouter } from "next/router";
import CommonList from "components/__pages/list/Common";

export default function List() {
  const [current, setCurrent] = React.useState(1);
  React.useEffect(() => {
    setCurrent(Number(window.location.href.split("/").pop()));
  }, []);
  return <CommonList current={current} />;
}
