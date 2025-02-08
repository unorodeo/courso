import localFont from "next/font/local";

const inter = localFont({
  src: "./inter_var_font.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export { inter };
