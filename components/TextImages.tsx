"use client";

import { TextImagesStoryblok } from "@/types/components-schema";
import { unflatten } from "@/helpers/unflatten";
import { storyblokEditable } from "@storyblok/react/rsc";
import { TextImages as EuiTextImages } from "@energyui/design-system/components/TextImages";

type TextImagesProps = {
  blok: TextImagesStoryblok;
};
const TextImages: React.FC<TextImagesProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {/* @ts-expect-error */}
    <EuiTextImages {...unflatten(blok)} />
  </div>
);

export default TextImages;
