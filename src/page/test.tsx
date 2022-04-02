import { Fragment } from "react";
import { observer, inject } from "mobx-react";
import UseRefCon from "../ReatHooks/useRef";

const Test = () => {
  return (
    <Fragment>
      <UseRefCon></UseRefCon>
      <UseRefCon></UseRefCon>
      <UseRefCon></UseRefCon>
    </Fragment>
  );
};

export default inject((store) => store)(observer(Test));
