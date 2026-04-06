import type { Meta, StoryObj } from "@storybook/react";
import { StepperStep } from "./StepperStep";

const meta: Meta<typeof StepperStep> = {
  title: "Components/StepperStep",
  component: StepperStep,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=151-62",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: { label: "Account", stepNumber: 1, state: "complete" },
};

export const Active: Story = {
  args: { label: "Payment", stepNumber: 3, state: "active" },
};

export const Upcoming: Story = {
  args: { label: "Review", stepNumber: 4, state: "upcoming" },
};
