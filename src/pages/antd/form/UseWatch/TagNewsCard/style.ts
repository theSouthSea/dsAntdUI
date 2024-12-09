import styled from "@emotion/styled"
import { CSSProperties } from "react"

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`
export const StyledItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  -webkit-box-align: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  /* line-height: 1.5; */
`
export const StyledSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`
// export const StyledFlexStart = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 10px;
// `
export const StyledJustify = styled.div<{ justify?: CSSProperties["justifyContent"] }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justify || "flex-start"};
  gap: 10px;
`
export const StyledAlign = styled.div<{ align: CSSProperties["alignItems"] }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: center;
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
