"use client";

import { VisualStoryblok } from "@/types/components-schema";
import { unflatten } from "@/helpers/unflatten";
import { storyblokEditable } from "@storyblok/react/rsc";
import { Visual as EuiVisual } from "@energyui/design-system/components/Visual";

type VisualProps = {
  blok: VisualStoryblok;
};
const Visual: React.FC<VisualProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {/* @ts-expect-error */}
    <EuiVisual {...unflatten(blok)} />
  </div>
);

export default Visual;
