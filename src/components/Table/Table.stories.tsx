import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { Badge } from "../Badge";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qKvsOqiBZ5mqB3ihpJcSyY/UI-Kit?node-id=150-67",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      { key: "name", label: "Name" },
      { key: "role", label: "Role" },
      {
        key: "status",
        label: "Status",
        render: (val) => (
          <Badge
            label={String(val)}
            type={val === "Active" ? "success" : "default"}
          />
        ),
      },
      { key: "joined", label: "Joined" },
    ],
    rows: [
      { name: "Alice Johnson", role: "Designer", status: "Active", joined: "Jan 2024" },
      { name: "Bob Smith", role: "Engineer", status: "Active", joined: "Mar 2023" },
      { name: "Carol White", role: "PM", status: "Active", joined: "Nov 2022" },
      { name: "David Lee", role: "Engineer", status: "Inactive", joined: "Aug 2021" },
    ],
  },
};
