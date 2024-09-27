import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"

//força configs de tipos para o tailwind
//content possui um array c 3 itens, com extensoes de aqrq, podendo entrasr nas seguintes pastas para proc atributo class para ver se os componentes podem receber estilos do css
// /**/ * ta completando os arquivos 
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  //podemos alterar o back e fore
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    typography
  ],
};
export default config;
