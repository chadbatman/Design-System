import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=269-47",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "📭",
    title: "Nothing here yet",
    description: "Get started by creating your first item.",
    actionLabel: "Create item",
  },
};

export const NoAction: Story = {
  name: "No Action",
  args: {
    icon: "📭",
    title: "Nothing here yet",
    description: "Get started by creating your first item.",
  },
};

export const CustomIcon: Story = {
  name: "Custom Icon",
  args: {
    icon: "🔍",
    title: "No results found",
    description: "Try adjusting your search or filters.",
  },
};
