import styled from "styled-components"
import { media } from "../../style/breakpoint"
import theme from "../../style/theme"

function Tags({ tags }) {
    return (
      <DivTags className="tags">
        {tags.map((tags, index) => {
          return (
            <EachTag key={index} className="each_tag">
              {tags}
            </EachTag>
          )
        })}
      </DivTags>
    )
  }
  
export default Tags
  

const DivTags = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const EachTag = styled.span`
    background-color: ${theme.primary};
    color: ${theme.secondary};
    border-radius: 10px;
    padding: 1% 5%;;
    margin-right: 10px;
    margin-top: 2px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: 400;
    width: 115px;
    height: 18px;

    ${media.desktop} {
        font-size: 14px;
        width: 140px;
        height: 25px;
    }
`