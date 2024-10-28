export async function fetchAssetsList() {
  return fetch("https://margex.com/client-payment/api/v1/collateral", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
