import "../../globals.css";
import { inter } from "../../fonts";

export const metadata = {
  title: "Presh | Portfolio",
  description: "Project",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
