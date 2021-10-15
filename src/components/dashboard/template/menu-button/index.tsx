import { HtmlHTMLAttributes, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuButtonStyled } from "./styles";

type MenuButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  redirectTo?: string;
  isRedirect: boolean;
  Icon: ReactNode;
};

export function MenuButton({
  isRedirect,
  redirectTo = "/",
  Icon,
  ...props
}: MenuButtonProps) {
  const actualRouter = useLocation();

  const { pathname } = actualRouter;
  const formattedRouter = redirectTo[0] === "/" ? redirectTo : `/${redirectTo}`;

  return (
    <>
      {isRedirect ? (
        <Link to={formattedRouter}>
          <MenuButtonStyled
            {...props}
            colors={pathname === formattedRouter ? "active" : "inactive"}
          >
            {Icon}
          </MenuButtonStyled>
        </Link>
      ) : (
        <MenuButtonStyled {...props}>{Icon}</MenuButtonStyled>
      )}
    </>
  );
}
