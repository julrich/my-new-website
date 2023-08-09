import Page from "@/components/Page";
import PriceFinder from "@/components/PriceFinder";
import Text from "@/components/Text";
import Visual from "@/components/Visual";
import Html from "@/components/Html";
import Cta from "@/components/Cta";
import TextImages from "@/components/TextImages";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export function initStoryblok() {
  const components = {
    page: Page,
    text: Text,
    visual: Visual,
    cta: Cta,
    "text-images": TextImages,
    html: Html,
    pricefinder: PriceFinder,
  };

  storyblokInit({
    accessToken: process.env.storyblokApiToken,
    use: [apiPlugin],
    components,
  });
}
