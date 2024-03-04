import { Button } from "@components/react-tailwind";
import { RefPaletteTokens } from "@components/theme";

export default function Home() {
  const teste = Object.entries(RefPaletteTokens).find(([color, value]) => {
    const findColor = Object.entries(value).find(
      ([shade, hexCode]) => hexCode === "#09090b"
    );

    if (findColor) {
      console.log(`--ref-palette-${color}-${findColor[0]}`);
    }
  });

  return (
    <main className="bg-sys-color-background h-dvh">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </main>
  );
}
