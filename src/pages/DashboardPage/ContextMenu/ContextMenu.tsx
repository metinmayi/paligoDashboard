import * as React from "react";
import Drawer from "@mui/material/Drawer";
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
      <p>This is the contextmenu</p>
    </Drawer>
  );
};
