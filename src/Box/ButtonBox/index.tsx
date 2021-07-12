import {FC,Fragment} from "react";
import MyButton,{btnType ,btnSize} from '../../Components/Button';

const ButtonBox:FC =(props: any)=> {
  return(
    <Fragment>
      <div className="flex-b width-100per">
        <MyButton
          type={btnType.Primary}
        >
          Primary
        </MyButton>
        <MyButton
          type={btnType.Default}
        >
          Default
        </MyButton>
        <MyButton
          type={btnType.Danger}
        >
          Danger
        </MyButton>
        <MyButton
          type={btnType.Disabled}
          disabled
        >
          Disabled
        </MyButton>
      </div>
      <div className="flex-b width-100per">
        <MyButton
          type={btnType.Primary}
          size={btnSize.Large}
        >
          Primary
        </MyButton>
        <MyButton
          type={btnType.Default}
          size={btnSize.Large}
        >
          Default
        </MyButton>
        <MyButton
          type={btnType.Danger}
          size={btnSize.Small}
        >
          Danger
        </MyButton>
        <MyButton
          type={btnType.Disabled}
          size={btnSize.Small}
          disabled
        >
          Disabled
        </MyButton>
      </div>
      <div className="flex-b width-100per">
        <MyButton
          type={btnType.Link}
        >
          Link1
        </MyButton>
        <MyButton
          type={btnType.Link}
          disabled
        >
          Link2
        </MyButton>
        <MyButton
          type={btnType.Link}
          href="https://codersblock.com"
        >
          Link3
        </MyButton>
        <MyButton
          type={btnType.Link}
          size={btnSize.Small}
        >
          Link4
        </MyButton>
        <MyButton
          type={btnType.Link}
          size={btnSize.Large}
        >
          Link5
        </MyButton>
      </div>
    </Fragment>
  )
}

export default ButtonBox;