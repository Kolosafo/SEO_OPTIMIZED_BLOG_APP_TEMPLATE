import { getBaseUrl } from "@/lib/utils";
import appConfig from "../../app-config.json";

export const SITE_CONFIG = {
  title: appConfig.appName,
  description: appConfig.appDescription,
  openGraphImage: appConfig.openGraphImage,
  favicon: appConfig.favicons.ico,
  url: appConfig.appUrl || getBaseUrl(),
  image: appConfig.openGraphImage,
  keywords: appConfig.keywords,
  twitter: appConfig.twitter,
  author: appConfig.author,
  heroTitle: appConfig.heroTitle,
  heroSubtitle: appConfig.heroSubtitle,
};

export const SITE_URL = `${getBaseUrl()}`;
