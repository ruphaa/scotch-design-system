import classnames from "classnames";
import styles from "./avatar_group.module.css";
import avatarStyles from "./avatar.module.css";
import { Avatar } from "./avatar";
import type { AvatarProps } from "./avatar";

/**
 * Todo
 * 
 * - AvatarGroup with open up model or hover on top
 * 
 * https://dev.to/dio41020/react-avatar-group-a-responsive-automatically-generated-group-avatar-component-powered-by-ui-avatars-pk
 * 
 */

export type AvatarItemProps = Omit<AvatarProps, "onClick" | "size">;

export type AvatarGroupProps = {
    items: AvatarItemProps[];
    max?: number,
    size?: AvatarProps["size"],
    onClick?: AvatarProps["onClick"],
}

export const AvatarGroup = ({items, max, size, onClick}: AvatarGroupProps) => {
    const visibleAvatarsLength = max != null && items.length - max;
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
        <div role="list" className={styles.avatarGroup}>
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
