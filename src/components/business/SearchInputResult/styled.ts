import styled from "@emotion/styled"
import { Input } from "antd"

export const StyledSearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: flex-start;
  gap: 10px;
`
export const StyledSearchInput = styled(Input)`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`
export const StyledResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
`
