import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=81-32",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder text",
  },
};

export const WithValue: Story = {
  args: {
    label: "Label",
    value: "Active text value",
  },
};

export const Focused: Story = {
  args: {
    label: "Label",
    placeholder: "Click to focus",
    // Focus state is triggered by clicking / tabbing into the input
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder text",
    error: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    placeholder: "Disabled input",
    disabled: true,
  },
};
