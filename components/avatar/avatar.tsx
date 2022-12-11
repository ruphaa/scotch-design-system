import classnames from "classnames";
import { ReactNode } from "react";
import styles from "./avatar.module.css";

export type Size = "small" | "medium" | "large";

export type AvatarProps = {
  name?: string;
  photo?: string;
  size?: Size;
  onClick?: () => void,
};

export const Avatar = ({ name, photo, size = "medium", onClick }: AvatarProps) => {
  const initials = name?.substring(0, 2).toUpperCase();
  let content = null;
  if (photo) {
    content = <img src={photo} alt={name} className={styles.photo} />;
  } else if (name) {
    content = initials;
  } else {
    // render empty avatar
  }

  const avatar = (
    <span
      className={classnames(styles.avatar, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
    >
      {content}
    </span>
  );

  if(onClick) {
    return <ClickableAvatar onClick={onClick}>{avatar}</ClickableAvatar>
  }

  return avatar;
};

type ClickableAvatar = {
  onClick?: AvatarProps["onClick"],
  children?: ReactNode,
}

const ClickableAvatar = ({onClick, children}: ClickableAvatar) => {
  return (
    <button className={styles.avatarButton} onClick={onClick}>
      {children}
    </button>
  )
};
