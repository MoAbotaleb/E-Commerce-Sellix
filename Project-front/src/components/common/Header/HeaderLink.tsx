
import { NavLink } from "react-router-dom";
interface HeaderLinkProps {
  url: string;
  title: string;
}
export default function HeaderLink({ url, title }: HeaderLinkProps) {
  return (
    <NavLink to={url} className="group">
      {title}
      <span className="bg-violet-500 block h-0.5 max-w-0 group-hover:max-w-full duration-300" />
    </NavLink>
  );
}
