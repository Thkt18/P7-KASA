import styled from "styled-components"

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
      font-family: 'Montserrat', sans-serif;

      @media (max-width: 767px) and (min-width: 345px) {
        width: 100%;
        justify-content: flex-end;
        
      }
`

const Host = styled.div`
    color: #ff6060;
    text-align: right;
    font-size: 18px;
    font-weight: 500;
    margin: 25px 15px 0 0;
    line-height: 0.5;

    @media (max-width: 767px) and (min-width: 345px) {
        font-size: 12px;
    }
`

const HostImg = styled.img`
    border-radius: 50%;
    height: 64px;

    @media (max-width: 767px) and (min-width: 345px) {
        height: 32px;
    }
` 