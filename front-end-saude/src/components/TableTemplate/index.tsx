import * as React from "react";
import { TableInstance } from "react-table";
import {
  Table,
  StyledTH,
  StyledTHead,
  StyledTR,
  StyledTD,
  TBODY
} from "./styles";

const TableTemplate: React.FC<{
  tableProps: TableInstance<any>;
}> = ({
  tableProps: {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  }
}) => (
  <Table {...getTableProps()}>
    <StyledTHead>
      {headerGroups.map((headerGroup: any, index: number) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
          {headerGroup.headers.map((column: any, subIndex: number) => (
            <StyledTH
              key={subIndex}
              centered={column.centered}
              {...column.getHeaderProps()}
            >
              {column.render("Header")}
            </StyledTH>
          ))}
        </tr>
      ))}
    </StyledTHead>
    <TBODY {...getTableBodyProps()}>
      {rows.map((row: any, index: number) => {
        prepareRow(row);
        return (
          <StyledTR {...row.getRowProps()} key={index}>
            {row.cells.map((cell: any, subIndex: number) => {
              return (
                <StyledTD {...cell.getCellProps()} key={subIndex}>
                  {cell.render("Cell")}
                </StyledTD>
              );
            })}
          </StyledTR>
        );
      })}
    </TBODY>
  </Table>
);

export default TableTemplate;
