import { apiGet } from "@/utils";

interface IHomeBanner {
  image: string;
  link: string;
  description: string;
}

const getBannerLayout = async () => {
  const result = await apiGet<{ data: IHomeBanner }>("banners/banner-layout");
  return result.data;
};

export { getBannerLayout };
