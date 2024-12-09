import styled from "@emotion/styled"

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`
export const StyledItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`
export const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`
export const StyledSummary = styled.div`
  font-size: 14px;
  color: #666;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  text-align: start;
  /* line-height: 1.5; */
`
export const StyledSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`
export const StyledActionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`
