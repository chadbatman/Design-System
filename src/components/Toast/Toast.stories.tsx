import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=126-22",
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "warning", "error", "info"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: "Your changes have been saved successfully.",
    type: "success",
  },
};

export const Warning: Story = {
  args: {
    message: "Your session is about to expire.",
    type: "warning",
  },
};

export const Error: Story = {
  args: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
};

export const Info: Story = {
  args: {
    message: "A new update is available for download.",
    type: "info",
  },
};
