"use client";

import { HtmlStoryblok } from "@/types/components-schema";
import { unflatten } from "@/helpers/unflatten";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Html as EuiHtml } from "@energyui/design-system/components/Html";

type HtmlProps = {
  blok: HtmlStoryblok;
};
const Html: React.FC<HtmlProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <EuiHtml {...unflatten(blok)} />
  </div>
);

export default Html;
