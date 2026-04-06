import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=128-13",
    },
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  name: "Small",
  args: { size: "sm" },
};

export const Medium: Story = {
  name: "Medium",
  args: { size: "md" },
};

export const Large: Story = {
  name: "Large",
  args: { size: "lg" },
};
