import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=127-23",
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    content: "Tooltip content here",
    children: <button>Hover me</button>,
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    content: "Tooltip content here",
    children: <button>Hover me</button>,
  },
};

export const WithTitle: Story = {
  name: "With Title",
  args: {
    title: "Helpful tip",
    content: "This action will update your settings.",
    children: <button>Hover me</button>,
  },
};
