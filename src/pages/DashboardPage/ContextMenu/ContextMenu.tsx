import { Drawer } from "@mui/material";
import * as React from "react";
import "../DashboardPage.css";

interface ContextMenuProps {
  isContextOpen: boolean;
  setIsContextOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ContextMenu: React.FC<ContextMenuProps> = ({
  isContextOpen,
  setIsContextOpen,
}) => {
  function toggleDrawer() {
    setIsContextOpen((current) => !current);
  }

  return (
    <Drawer
      open={isContextOpen}
      variant="persistent"
      className="context-menu-wrapper"
    >
      <header>
        <p>This is the contextmenu</p>
        <button onClick={() => toggleDrawer()}>Toggle</button>
      </header>
    </Drawer>
  );
};
