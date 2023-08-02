import "../../globals.css";

export const metadata = {
  title: "Presh | Portfolio",
  description: "My Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
