import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    // Figma UI Kit — Button component set (node 50:62)
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=50-62",
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "destructive"],
    },
    size: {
      control: { type: "radio" },
      options: ["md", "sm"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ── Primary ────────────────────────────────────────────

export const Primary: Story = {
  args: { label: "Primary", variant: "primary", size: "md" },
};

export const PrimarySmall: Story = {
  name: "Primary Small",
  args: { label: "Primary Small", variant: "primary", size: "sm" },
};

// ── Secondary ──────────────────────────────────────────

export const Secondary: Story = {
  args: { label: "Secondary", variant: "secondary", size: "md" },
};

export const SecondarySmall: Story = {
  name: "Secondary Small",
  args: { label: "Secondary Small", variant: "secondary", size: "sm" },
};

// ── Ghost ──────────────────────────────────────────────

export const Ghost: Story = {
  args: { label: "Ghost", variant: "ghost", size: "md" },
};

// ── Destructive ────────────────────────────────────────

export const Destructive: Story = {
  args: { label: "Destructive", variant: "destructive", size: "md" },
};

// ── Disabled states ────────────────────────────────────

export const PrimaryDisabled: Story = {
  name: "Primary — Disabled",
  args: { label: "Primary", variant: "primary", size: "md", disabled: true },
};

export const SecondaryDisabled: Story = {
  name: "Secondary — Disabled",
  args: { label: "Secondary", variant: "secondary", size: "md", disabled: true },
};

export const GhostDisabled: Story = {
  name: "Ghost — Disabled",
  args: { label: "Ghost", variant: "ghost", size: "md", disabled: true },
};

export const DestructiveDisabled: Story = {
  name: "Destructive — Disabled",
  args: { label: "Destructive", variant: "destructive", size: "md", disabled: true },
};
