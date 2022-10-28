import styled from "@emotion/styled";
interface StyledPageContentProps {
  isContextOpen: boolean;
}
export const StyledPageContent = styled.div<StyledPageContentProps>(
  ({ isContextOpen }) => ({
    transition: "0.2s",
    width: isContextOpen ? `calc(100% - 18vw)` : "100%",
    position: "absolute",
    right: 0,
  })
);
