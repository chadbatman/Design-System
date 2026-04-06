import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=146-12",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Default", type: "default" },
};

export const Primary: Story = {
  args: { label: "Primary", type: "primary" },
};

export const Success: Story = {
  args: { label: "Success", type: "success" },
};

export const Warning: Story = {
  args: { label: "Warning", type: "warning" },
};

export const Error: Story = {
  args: { label: "Error", type: "error" },
};
