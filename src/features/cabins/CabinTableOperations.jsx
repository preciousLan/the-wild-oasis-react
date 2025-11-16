import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'
import TableOperations from '../../ui/TableOperations'


export const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter />
      <SortBy options={[
        { value: "name-asc", label: "sort by name (A-Z)" },
        { value: "name-des", label: "sort by name (Z-A)" },
        { value: "regularPrice-asc", label: "sort by price (low first)" },
        { value: "regularPrice-des", label: "sort by price (high first)" },
        { value: "max-capacity-asc", label: "sort by capacity (low first)" },
        { value: "max-capacity-dec", label: "sort by capacity (high first)" },
      ]} />
    </TableOperations>
  )
}
