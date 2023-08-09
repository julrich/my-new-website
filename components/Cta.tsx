"use client";

import { CtaStoryblok } from "@/types/components-schema";
import { unflatten } from "@/helpers/unflatten";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Cta as EuiCta } from "@energyui/design-system/components/Cta";

type CtaProps = {
  blok: CtaStoryblok;
};
const Cta: React.FC<CtaProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <EuiCta {...unflatten(blok)} />
  </div>
);

export default Cta;
