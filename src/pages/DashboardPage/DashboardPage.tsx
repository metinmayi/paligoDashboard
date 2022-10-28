import React from "react";
import { ContextMenu } from "./ContextMenu/ContextMenu";
import { StyledPageContent } from "./ContextMenu/StyledPageContent";
export const DashboardPage: React.FC = () => {
  const [isContextOpen, setIsContextOpen] = React.useState(false);

  function toggleOpen() {
    setIsContextOpen((current) => !current);
  }

  return (
    <>
      <ContextMenu
        isContextOpen={isContextOpen}
        setIsContextOpen={setIsContextOpen}
      ></ContextMenu>
      <StyledPageContent className="jabba" isContextOpen={isContextOpen}>
        <button onClick={() => toggleOpen()}>Toggle</button>
        <div className="navigationMenu">
          <ul style={{ display: "flex" }}>
            <li>Abc</li>
            <li>Abc</li>
            <li>Abc</li>
            <li>Abc</li>
          </ul>
        </div>
      </StyledPageContent>
    </>
  );
};
