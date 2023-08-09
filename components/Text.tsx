import { TextStoryblok } from "@/types/components-schema";
import { storyblokEditable } from "@storyblok/react/rsc";

type TextProps = {
  blok: TextStoryblok;
};
const Text: React.FC<TextProps> = ({ blok }) => (
  <div {...storyblokEditable(blok)}>{blok.content}</div>
);

export default Text;
