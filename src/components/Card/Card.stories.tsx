import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=204-44",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const commonArgs = {
  title: "Card Title",
  description: "A short description of the card content goes here.",
  badge: "Default",
  buttonLabel: "Learn more",
  userName: "Alice Johnson",
  userRole: "Product Designer",
  userInitials: "AJ",
};

export const Default: Story = {
  args: { ...commonArgs, type: "default" },
};

export const DefaultLoading: Story = {
  name: "Default — Loading",
  args: { ...commonArgs, type: "default", loading: true },
};

export const WithImage: Story = {
  name: "With Image",
  args: { ...commonArgs, type: "with-image" },
};

export const WithImageLoading: Story = {
  name: "With Image — Loading",
  args: { ...commonArgs, type: "with-image", loading: true },
};

export const Interactive: Story = {
  args: { ...commonArgs, type: "interactive" },
};

export const InteractiveLoading: Story = {
  name: "Interactive — Loading",
  args: { ...commonArgs, type: "interactive", loading: true },
};

export const User: Story = {
  args: { ...commonArgs, type: "user" },
};

export const UserLoading: Story = {
  name: "User — Loading",
  args: { ...commonArgs, type: "user", loading: true },
};
