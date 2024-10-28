import { useEffect, useState } from "react";
import { getAssetsList, wsConnection } from "../model/utils";
import { AssetInfo, AssetPriceInfo, PriceMap } from "../model/types";
import { TableComponent } from "./table-component";

const WS_URL = "wss://margex.com/client-last-trade/last";

export const AssetsTable = () => {
  const [assets, setAssets] = useState<AssetInfo[]>([]);
  const [priceMap, setPriceMap] = useState<PriceMap>({});

  const updMapData = (data: AssetPriceInfo) => {
    setPriceMap((prevData) => ({
      ...prevData,
      [data.s]: data.p,
    }));
  };

  useEffect(() => {
    getAssetsList().then((data) => {
      setAssets(data);
    });
  }, []);

  useEffect(() => {
    const socket = wsConnection(WS_URL, updMapData);

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1> Assets Table</h1>

      <TableComponent data={assets} priceMap={priceMap}></TableComponent>
    </div>
  );
};
