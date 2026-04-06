import React from "react";
import "./Table.css";

export interface TableColumn {
  key: string;
  label: string;
  width?: number;
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  rows: Record<string, unknown>[];
}

export const Table: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__head">
          <tr className="table__head-row">
            {columns.map((col) => (
              <th
                key={col.key}
                className="table__head-cell"
                style={col.width ? { width: col.width } : undefined}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`table__row table__row--${rowIndex % 2 === 0 ? "even" : "odd"}`}
            >
              {columns.map((col) => (
                <td key={col.key} className="table__cell">
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
