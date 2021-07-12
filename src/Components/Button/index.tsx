import React,{ FC } from "react";
import classNames from 'classnames';


export enum btnType {
  Primary = 'primary', //基本无色，边框绿色
  Default = 'default', //默认蓝色
  Danger = 'danger', //警告红色
  Disabled = 'disabled', //禁用灰色
  Link = 'link' //链接Button
}

export enum btnSize {
  Large = 'lg',
  Small = 'sm'
}
interface IButtonProps {
  children?: React.ReactNode;
  type?: btnType;
  size?: btnSize;
  disabled?: boolean;
  href?: string;
}

const MyButton:FC<IButtonProps> = (props) => {
  const {
    children,
    size,
    type,
    href,
    disabled
  } = props

  const btnClass = classNames('btn',{
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    'disabled': disabled && (type === btnType.Link),
  })

  if(type === btnType.Link && href) {
    return (
      <a 
        className={btnClass}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={btnClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default MyButton;