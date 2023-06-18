import "../../globals.css";
import { inter } from "../../fonts";

export const metadata = {
  title: "Presh | _________",
  description: "________ Project",
};

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: string;
}) {
  return <section>{children}</section>;
}
