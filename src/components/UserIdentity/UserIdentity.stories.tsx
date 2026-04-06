import type { Meta, StoryObj } from "@storybook/react";
import { UserIdentity } from "./UserIdentity";

const meta: Meta<typeof UserIdentity> = {
  title: "Components/UserIdentity",
  component: UserIdentity,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=258-47",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    name: "Alice Johnson",
    role: "Product Designer",
    initials: "AJ",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    name: "Alice Johnson",
    role: "Product Designer",
    initials: "AJ",
    size: "lg",
  },
};
