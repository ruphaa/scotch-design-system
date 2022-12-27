import React from "react";
import { Meta } from "@storybook/react";

import { Toast, ToastContainer } from "./toast";

export default {
    title: "Toast",
    component: Toast
} as Meta<typeof Toast>

export const BasicToast = () => <Toast>Toast is a toast, could be a cheese toast or avocado toast</Toast>;

export const MultipleToasts = () => {
  return (
    <ToastContainer>
      <Toast>
        Wizard Rose added to cart
      </Toast>
      <Toast>
        Self Watering Pot added to cart
      </Toast>
    </ToastContainer>
  )
}