import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=127-15",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "300px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: "Confirm Action",
    children: "Are you sure? This action cannot be undone.",
    primaryAction: { label: "Delete", variant: "destructive", onClick: () => {} },
    secondaryAction: { label: "Cancel", onClick: () => {} },
  },
};

export const WithPrimaryAction: Story = {
  name: "With Primary Action",
  args: {
    open: true,
    title: "Confirm Action",
    children: "Are you sure? This action cannot be undone.",
    primaryAction: { label: "Confirm", variant: "primary", onClick: () => {} },
    secondaryAction: { label: "Cancel", onClick: () => {} },
  },
};
