import React from "react";
import { ContextMenu } from "./ContextMenu/ContextMenu";
import { StyledPageContent } from "./StyledPageContent";
export const DashboardPage: React.FC = () => {
  const [isContextOpen, setIsContextOpen] = React.useState(true);

  return (
    <>
      <ContextMenu
        isContextOpen={isContextOpen}
        setIsContextOpen={setIsContextOpen}
      ></ContextMenu>
      <StyledPageContent className="jabba" isContextOpen={isContextOpen}>
        <div className="navigationMenu">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed,
            veniam magnam iste similique illo itaque perferendis qui delectus
            enim rem accusantium placeat corporis, at fuga esse corrupti
            assumenda libero!
          </p>
        </div>
      </StyledPageContent>
    </>
  );
};
