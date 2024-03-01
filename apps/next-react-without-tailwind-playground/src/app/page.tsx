import { RefPaletteAmberTokens } from "@components/theme";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--sys-color-primary)",
        }}
      >
        DIV MUITO LOUCA E TEMATIZADA
      </div>
      {RefPaletteAmberTokens[100]}
    </>
  );
}
