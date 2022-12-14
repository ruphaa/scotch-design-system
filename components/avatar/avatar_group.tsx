import classnames from "classnames";
import styles from "./avatar_group.module.css";
import avatarStyles from "./avatar.module.css";
import { Avatar } from "./avatar";
import type { AvatarProps } from "./avatar";

export type AvatarItemProps = Omit<AvatarProps, "onClick" | "size">;

export type AvatarGroupProps = {
    items: AvatarItemProps[];
    max?: number,
    size?: AvatarProps["size"],
    onClick?: AvatarProps["onClick"],
    showOnHover?: "all" | "current" | "none",
}

export const AvatarGroup = ({items, max, size, showOnHover = "none", onClick}: AvatarGroupProps) => {
    const visibleAvatars = max ? items.slice(0, max) : items;

    const avatarItems = visibleAvatars.map((item, index) => {
        return (
          <span className={styles.avatarItem} key={index}>
            <Avatar
                name={item.name}
                photo={item.photo}
                onClick={onClick}
                size={size}
            />
          </span>
        )
    });

    return (
        <div role="list" className={classnames(styles.avatarGroup, {
          [styles.showAll]: showOnHover === "all",
          [styles.showCurrent]: showOnHover === "current",
        })}>
          {avatarItems}
          {max && <OverflowAvatar max={max} size={size}/>}
        </div>
    )
}

const OverflowAvatar = ({max, size = "medium"}: {max: number, size?: AvatarProps["size"]}) => {
  return (
    <span className={classnames(avatarStyles.avatar, styles.avatarItem, styles.overflowAvatar, {
        [avatarStyles.small]: size === "small",
        [avatarStyles.medium]: size === "medium",
        [avatarStyles.large]: size === "large",
    })}>+{max}</span>
  )
}
