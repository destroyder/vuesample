export default async function requestApi(endpoint: string, method: string, params?: object): Promise<any> {
  const response = await fetch(endpoint);
  return response;
}
