import type { Meta, StoryObj } from "@storybook/react";
import { SearchableDropdown } from "./SearchableDropdown";

const OPTIONS = ["Seattle", "Seattle Heights", "Sea-Tac", "Portland", "San Francisco"];

const meta: Meta<typeof SearchableDropdown> = {
  title: "Components/SearchableDropdown",
  component: SearchableDropdown,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=62-49",
    },
  },
  args: { options: OPTIONS },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Search options" },
};

export const WithValue: Story = {
  name: "With Value",
  args: { value: "Seattle" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Search options" },
};
