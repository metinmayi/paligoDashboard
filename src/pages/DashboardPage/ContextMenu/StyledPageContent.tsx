import styled from "@emotion/styled";
interface PageContentProps {
  isContextOpen: boolean;
}
export const StyledPageContent = styled.div<PageContentProps>(
  ({ isContextOpen }) => ({
    transition: "0.2s",
    width: isContextOpen ? `calc(100% - 340px)` : "100%",
    position: "absolute",
    right: 0,
  })
);
