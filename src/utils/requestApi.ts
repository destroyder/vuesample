type ResDir1 = {
  message: string | null;
  results: Array<ResDir2>;
  status: number;
};

type ResDir2 = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};

export default async function requestApi(endpoint: string, method: string, params?: object): Promise<ResDir1> {
  try {
    const response = await fetch(endpoint, {
      method,
      body: JSON.stringify(params),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
  throw new Error("Unexpected error in find method.");
}
