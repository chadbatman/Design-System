import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=61-58",
    },
  },
  args: { label: "Toggle" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {
  args: { on: false },
};

export const On: Story = {
  args: { on: true },
};

export const FocusOff: Story = {
  name: "Focus — Off",
  args: { on: false },
  // Focus ring is visible when the toggle is focused via keyboard (Tab key)
};

export const FocusOn: Story = {
  name: "Focus — On",
  args: { on: true },
  // Focus ring is visible when the toggle is focused via keyboard (Tab key)
};

export const Disabled: Story = {
  args: { on: false, disabled: true },
};
