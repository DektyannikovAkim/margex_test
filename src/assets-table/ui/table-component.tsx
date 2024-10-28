import { AssetInfo, PriceMap } from "../model/types";

interface TableComponentProps {
  data: AssetInfo[];
  priceMap: PriceMap;
}

export const TableComponent = ({ data, priceMap }: TableComponentProps) => {
  if (!data || data.length === 0) {
    return <p>No Data</p>;
  }

  return (
    <table className="Table">
      <thead>
        <tr>
          <th key={"id"} className="HeaderCell">
            ID
          </th>
          <th key={"asset"} className="HeaderCell">
            Asset
          </th>
          <th key={"price"} className="HeaderCell">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td key={"id"} className="TableCell">
              {row["id"]}
            </td>
            <td key={"asset"} className="TableCell">
              {row["asset"]}
            </td>
            <td key={"price"} className="TableCell">
              {priceMap[row.id] || "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
