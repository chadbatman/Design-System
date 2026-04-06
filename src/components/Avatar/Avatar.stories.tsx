import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=146-23",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const XS: Story = {
  args: { initials: "AJ", size: "xs" },
};

export const SM: Story = {
  args: { initials: "AJ", size: "sm" },
};

export const MD: Story = {
  args: { initials: "AJ", size: "md" },
};

export const LG: Story = {
  args: { initials: "AJ", size: "lg" },
};

export const XL: Story = {
  args: { initials: "AJ", size: "xl" },
};
