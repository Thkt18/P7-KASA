import styled from "styled-components"
import { media } from '../../style/breakpoint';
import theme from '../../style/theme';

function HostName({ host }) {
    const hostNameSplitted = host.name.split(' ')
    const [name, lastname] = hostNameSplitted
  
    return (
      <DetailsHost className="accommodation_host_details">
        <Host className="accommodation_host_name">
          <p className="host_firstname">{name.trim()}</p>
          <p className="host_lastname">{lastname.trim()}</p>
        </Host>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <HostImg
          src={host.picture}
          // eslint-disable-next-line no-template-curly-in-string
          alt="{`Photo de '${accommodation.host.name}`}"
          className="accommodation_host_picture"
        />
      </DetailsHost>
    )
  }
  
  export default HostName

const DetailsHost = styled.div`
      display: flex;
      align-items: center;
      max-width: 170px;
      width: 100%;
      justify-content: flex-end;

      ${media.desktop} {
          max-width: 100%;
      }
`

const Host = styled.div`
    color: ${theme.primary};
    text-align: right;
    font-size: 12px;
    font-weight: 500;
    margin: 25px 15px 0 0;
    line-height: 0.5;

    ${media.desktop} {
        font-size: 18px;
    }
`

const HostImg = styled.img`
    border-radius: 50%;
    height: 32px;

    ${media.desktop} {
        height: 64px;
        
` 