import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=146-28",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { direction: "horizontal" },
};

export const Vertical: Story = {
  args: { direction: "vertical" },
  decorators: [
    (Story) => (
      <div style={{ height: "80px" }}>
        <Story />
      </div>
    ),
  ],
};
