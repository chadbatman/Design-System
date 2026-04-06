import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=61-75",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 50, min: 0, max: 100 },
};

export const LowValue: Story = {
  name: "Low Value",
  args: { value: 20, min: 0, max: 100 },
};

export const HighValue: Story = {
  name: "High Value",
  args: { value: 80, min: 0, max: 100 },
};

export const Disabled: Story = {
  args: { value: 50, disabled: true },
};
