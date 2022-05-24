import { observer, inject } from "mobx-react";
import { Fragment } from "react";

interface Iprops {
  children?: any;
}

const MenuBox = ({ props }: Iprops & any) => {
  return <Fragment>222</Fragment>;
};

export default inject((store) => store)(observer(MenuBox));
