import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    // Replace the URL below with your Figma component's share URL.
    // In Figma: right-click the component → Copy link → paste here.
    design: {
      type: "figma",
      url: "https://www.figma.com/file/REPLACE_WITH_YOUR_FILE_KEY/Design-System?node-id=REPLACE_WITH_NODE_ID",
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    label: "Button",
    variant: "ghost",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    label: "Small",
    variant: "primary",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    variant: "primary",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    variant: "primary",
    disabled: true,
  },
};
