import { defineStore } from "pinia";
import requestApi from "@/utils/requestApi";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster();

export const useGetMappingStore = defineStore("getMapping", {
  state: () => {
    return {
      data: "",
    };
  },
  actions: {
    async getMappingData(propGroup: number) {
      const getApiUrl = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=2490001`;

      try {
        const response = await requestApi(getApiUrl, "GET");

        // エラー対応
        if (!response.ok && response.status !== 200 && response.status !== 201) {
          toaster.show("エラーが発生しました。再読み込みをして解決されないようでしたらお問合せください。", {
            duration: 5000,
            type: "error",
          });
          return;
        }

        const responseData = await response.json();

        this.data = responseData;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
