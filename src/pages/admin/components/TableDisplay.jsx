
import { useMemo } from 'react';

import { useTable, useSortBy, usePagination } from 'react-table'
import { Paper, Table, TableBody, TableCell, 
         TableContainer,TableHead, Pagination, 
         TableRow, Stack, PaginationItem  } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import { columnsData } from '../data/columns'
import { TableButtons } from './TableButtons'

const data = [
  {
    id:1,
    name: "El capiro",
    category: "Supermercado",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:2,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:3,
    name: "Anduvios",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 321,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:4,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 1,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:5,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 32,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:6,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:7,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:8,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:9,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:10,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:11,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:12,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:13,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:14,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
  {
    id:15,
    name: "Los lagos",
    category: "Piscina",
    address: 1000,
    location: 5825,
    cellphone: 123,
    website: "",
    facebook: "",
    instagram: "",
    whatsapp: "",
    foto: "",
  },
];

export const TableDisplay = () => {

  const columns = useMemo(() => columnsData, [] )

  const { 
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    page,//Se usa en lugar de rows
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        initialState: {
            pageIndex: 0, 
            hiddenColumns: ["id", "address", "location", "website", "facebook", "instagram", "whatsapp", "foto"]}//Ocultamos la columna del ID
       },
      TableButtons,
      useSortBy,
      usePagination)

  return (
    <Paper sx={{ width: '90%', overflow: 'hidden', margin:'auto auto auto auto' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table" {...getTableProps()}>
          <TableHead>
              {headerGroups.map(headerGroup => (
                  <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                      <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : "→"}
                      </TableCell>
                  ))}
                  </TableRow>
              ))}
          </TableHead>

          <TableBody {...getTableBodyProps()}>
            {page.map((row, i) => {
                prepareRow(row)
                return (
                <TableRow {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return (
                        <TableCell {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </TableCell>
                    )
                    })}
                </TableRow>
                )
            })}
            </TableBody>

        </Table>
      </TableContainer>

    {/* <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            
            {...item}
          />
        )}
      />
    </Stack> */}

      {/* <div className="pagination">            
            <Pagination>
                <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage}/>
                <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage}/>
                <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}/>
            </Pagination>
            <span className='PaginationSpanText'>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span className='PaginationSpanText'>
                | Go to page:{' '}
                <input
                    className='PaginationInput'
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(page)
                    }}
                />
            </span>{' '}
            <DropdownButton value={pageSize}
            className='PaginationPageSizeSelect'
                title={`Show ${pageSize}`}>
                {[5, 10, 20, 30, 40, 50].map(pageSize => (
                    <Dropdown.Item
                    key={pageSize} 
                    value={pageSize}
                    onClick={e => {
                        console.log(e.target.getAttribute('value'))
                        setPageSize(Number(e.target.getAttribute('value')))
                    }}>
                        Show {pageSize}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div> */}
    </Paper>
  )

}
