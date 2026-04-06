import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const OPTIONS = ["Option 1", "Option 2", "Option 3", "Option 4"];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=62-25",
    },
  },
  args: { options: OPTIONS },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Select option" },
};

export const WithValue: Story = {
  name: "With Value",
  args: { value: "Option 2" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled" },
};
