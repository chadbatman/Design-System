import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=61-23",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    label: "Unchecked",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Checked",
    checked: true,
  },
};

export const Focused: Story = {
  args: {
    label: "Focused",
    checked: false,
    autoFocus: true,
  } as Story["args"] & { autoFocus?: boolean },
  render: (args) => (
    <Checkbox
      label={args?.label}
      checked={args?.checked}
      disabled={args?.disabled}
      onChange={args?.onChange}
    />
  ),
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  name: "Disabled Checked",
  args: {
    label: "Disabled Checked",
    checked: true,
    disabled: true,
  },
};
