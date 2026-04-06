import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=126-47",
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    message: "Here is some helpful information you should know about.",
    type: "info",
  },
};

export const Success: Story = {
  args: {
    message: "Your profile has been updated successfully.",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    message: "Your account storage is almost full.",
    type: "warning",
  },
};

export const Error: Story = {
  args: {
    message: "Failed to connect. Please check your network and try again.",
    type: "error",
  },
};
