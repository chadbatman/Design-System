import type { Meta, StoryObj } from "@storybook/react";
import { LoadingBar } from "./LoadingBar";

const meta: Meta<typeof LoadingBar> = {
  title: "Components/LoadingBar",
  component: LoadingBar,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=128-18",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinate: Story = {
  args: { value: 65 },
};

export const LowValue: Story = {
  name: "Low Value",
  args: { value: 25 },
};

export const HighValue: Story = {
  name: "High Value",
  args: { value: 90 },
};

export const Indeterminate: Story = {
  args: { indeterminate: true },
};
