import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Roboto';
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`

/* ---------------- LEFT SIDE ---------------- */

export const CreditCardDetailsContainer = styled.div`
  width: 45%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`

export const CreditCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  font-family: 'Roboto';
  @media screen and (min-width: 767px) {
    font-size: 36px;
    margin-top: 96px;
    margin-bottom: 12px;
    line-height: 1.3;
  }
`

export const HorizontalLine = styled.hr`
  width: 100px;
  border: 2px solid #ffd773;
  margin: 0;
  @media screen and (min-width: 767px) {
    width: 250px;
  }
`

export const CardContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    flex-grow: 1;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 350px;
  height: 220px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
  padding: 24px;
  color: #ffffff;
  box-shadow: 0px 4px 33px #344e7a;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  padding-left: 35px;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 40px;
`

export const CardholderNameText = styled.p`
  padding-top: 5px;
  padding-left: 35px;
  font-size: 12px;
  color: #d3d9e0;
  margin-bottom: 6px;
`

export const CardholderName = styled.p`
  padding-left: 35px;
  font-size: 16px;
  font-weight: 500;
`

/* ---------------- RIGHT SIDE ---------------- */

export const PaymentContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const PaymentMethodContainer = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`

export const PaymentMethodHeading = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #475569;
  margin-bottom: 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #c3cad9;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #3b4b69;
  }
`
