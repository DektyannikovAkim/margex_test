import { fetchAssetsList } from "./api";
import { ApiResponseGeneric, AssetInfo } from "./types";

async function responseHandler<T = any>(requestFunc: () => Promise<Response>) {
  try {
    const response = await requestFunc();

    if (!response.ok) {
      throw new Error("Error request");
    }
    return response.json() as Promise<ApiResponseGeneric<T>>;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getAssetsList() {
  const data = await responseHandler<AssetInfo[]>(fetchAssetsList);

  if (!data) return [];

  return data.data.sort((a, b) =>
    a.asset.toLowerCase().localeCompare(b.asset.toLowerCase())
  );
}

function isString(value: any) {
  return value instanceof String || typeof value === "string";
}

export function wsConnection<T>(wsUrl: string, updater: (data: T) => void) {
  const socket = new WebSocket(`${wsUrl}`);
  socket.onopen = () => {};

  socket.onmessage = (event) => {
    if (!isString(event.data) || event.data === "ping") return;

    const data = JSON.parse(event.data as string) as T;

    updater(data);
  };

  socket.onclose = () => {};

  return socket;
}
