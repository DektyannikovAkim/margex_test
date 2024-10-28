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
      <thead className="Header">
        <tr className="Table-row">
          <th key={"id"} className="Header-cell Cell">
            ID
          </th>
          <th key={"asset"} className="Header-cell Cell">
            Asset
          </th>
          <th key={"price"} className="Header-cell Cell">
            Price
          </th>
        </tr>
      </thead>
      <tbody className="Body">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="Table-row">
            <td key={"id"} className="Cell">
              {row["id"]}
            </td>
            <td key={"asset"} className="Cell">
              {row["asset"]}
            </td>
            <td key={"price"} className="Cell">
              {priceMap[row.id] || "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
