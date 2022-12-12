import React from 'react';
import { Meta } from '@storybook/react';

import { Avatar } from "./avatar";
import { AvatarGroup as BaseAvatarGroup } from "./avatar_group";


export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: { onClick: { action: 'clicked' } },
  } as Meta<typeof Avatar>;


export const Basic = () => <Avatar name="Ruphaa"/>;

export const WithPhoto = () => {
  const photoUrl = "https://m.media-amazon.com/images/I/513ApFj6QgL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg";
  return <Avatar name="Jerry" photo={photoUrl}/>
};

export const WithSizes = () => {
  return (
    <div style={{display: "flex", gap: "16px"}}>
      <Avatar name="Ruphaa" size="small"/>
      <Avatar name="Ruphaa" size="medium"/>
      <Avatar name="Ruphaa" size="large"/>
    </div>
  )
}

export const WithClickHandler = () => {
  return (
    <Avatar name="Ruphaa" onClick={() => console.log('clicked')}/>
  )
}

export const AvatarGroup = () => {
  const items = [
    {name: "Ruphaa"},
    {name: "Dk"},
    {name: "Terry"},
  ]
  return (
    <BaseAvatarGroup items={items}/>
  )
}

export const AvatarGroupWithMax = () => {
  const items = [
    {name: "Ruphaa"},
    {name: "Dk"},
    {name: "Terry"},
    {name: "Ganesan"},
    {name: "Sujatha"},
  ]
  return (
    <BaseAvatarGroup items={items} max={2}/>
  )
}

export const ClickableAvatarGroupWithMax = () => {
  const items = [
    {name: "Ruphaa"},
    {name: "Dk"},
    {name: "Terry"},
    {name: "Ganesan"},
    {name: "Sujatha"},
  ]
  return (
    <BaseAvatarGroup items={items} max={2} onClick={() => console.log('clicked')}/>
  )
}
