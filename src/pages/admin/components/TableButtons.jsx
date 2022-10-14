
import { DeleteButton } from './DeleteButton'
import { UpdateButton } from './UpdateButton'
import { ViewButton } from './ViewButton'

export const TableButtons = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "acciones",
        Header: "Acciones",
        Cell: ({ row }) => (
          <>
            <DeleteButton rowValues={ row.values }/>
            <UpdateButton rowValues={ row.values }/>
            <ViewButton rowValues={ row.values }/>
          </>
        ),
      },
    ]);
};