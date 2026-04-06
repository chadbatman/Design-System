import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=61-37",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Unselected",
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    label: "Selected",
    selected: true,
  },
};

export const Focused: Story = {
  args: {
    label: "Focused",
    selected: false,
  },
  render: (args) => (
    <RadioButton
      label={args?.label}
      selected={args?.selected}
      disabled={args?.disabled}
      onChange={args?.onChange}
    />
  ),
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    selected: false,
    disabled: true,
  },
};
