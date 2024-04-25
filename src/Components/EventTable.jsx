import React from "react";
import { useTable, usePagination } from "react-table";
import "tailwindcss/tailwind.css";

const EventTable = () => {
  const data = React.useMemo(
    () => [
      {
        id: 2,
        recents: "Queen Arit's Birthday",
        created: "1 Jul, 2023",
        day: "28 Feb, 2025",
        status: "Open",
      },
      {
        id: 1,
        recents: "Yale Party",
        created: "1 Jul, 2023",
        day: "4 Aug, 2023",
        status: "Draft",
      },
      {
        id: 7,
        recents: "Muhammed's Wedding",
        created: "1 Jul, 2023",
        day: "3 Sept, 2024",
        status: "Draft",
      },
      {
        id: 4,
        recents: "Edmund House Warming",
        created: "1 Jul, 2023",
        day: "3 Sept, 2024",
        status: "Open",
      },
      {
        id: 9,
        recents: "Hackathon Party",
        created: "30 June, 2023",
        day: "31 June, 2025",
        status: "Open",
      },
      
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Recent Events",
        accessor: "recent",
        Cell: ({ row }) => (
            <div className=" whitespace-nowrap">
                <span className=" text-dark-100 text-base font-medium">{row.original.recents}</span>
            </div>
          ),
      },
      {
        Header: "Created",
        accessor: "created",
        Cell: ({ value }) => (
          <span
          className="text-dark-100 text-base font-medium"
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Event Day",
        accessor: "day",
        Cell: ({ value }) => (
          <span
          className="text-[#344054] text-base font-medium"
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
            <span
            className={`${
                value === 'Open' ? 'text-[#00C68D] text-sm cursor-pointer' : (value === 'Draft' ? 'text-[#DD524D] ' : 'bg-[#B6B6B6] text-sm py-2 px-2 rounded-md text-white')
              }`}
            >
              {value}
            </span>
          ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="container mx-auto my-8">
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200 border border-[#E4E7EC] rounded-full"
      >
        <thead className="">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-base font-bold text-[#344054] tracking-wider"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y ">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const cellProps = cell.getCellProps();
                  let cellClassName = "px-6 py-4 whitespace-nowrap text-[#757575] font-semibold";
                  return (
                    <td 
                      {...cellProps} className={cellClassName}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-2">
        <button
          className="px-4 py-2 bg-blue-500 text-[#BDBDBD] text-sm rounded focus:outline-none"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <div>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-[#BDBDBD] text-sm rounded focus:outline-none"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EventTable;