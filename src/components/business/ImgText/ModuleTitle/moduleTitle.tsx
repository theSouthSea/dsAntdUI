import styled from "@emotion/styled";

const Title = styled.div`
  line-height: 40px;
  font-size: 16px;
  font-weight: 700;
`;
function ModuleTitle({ title }: { title: string }) {
  return <Title>{title}</Title>;
}

export default ModuleTitle;
