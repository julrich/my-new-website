import { initStoryblok } from "@/helpers/initStoryblok";
import "@energyui/design-system/components/global";
// @ts-expect-error
import IconSprite from "@energyui/design-system/IconSprite";

initStoryblok();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <IconSprite />
        {children}
        </body>
    </html>
  );
}
