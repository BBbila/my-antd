import ButtonBox from './Box/ButtonBox';
import { observer , inject }from 'mobx-react';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>welcome to my antd</h1>
      </div>
      <div className="mainContent">
        <span className="title">--BUTTON--</span>
        <div className="content height-200">
          <ButtonBox></ButtonBox>
        </div>
      </div>
    </div>
  );
}

export default inject(store => store)(observer(App));
