import styled from "styled-components"

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
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 767px) and (min-width: 345px) {
      width: 84px;
      height: 18px;
    }
`

const EachTag = styled.span`
    background-color: #f96060;
    color: white;
    border-radius: 10px;
    padding: 1% 5%;;
    margin-right: 10px;
    margin-top: 2px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;

    @media (max-width: 767px) and (min-width: 345px) {
        font-size: 10px;
    }
`