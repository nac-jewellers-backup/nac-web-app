export const cartCodPincode = `
query MyQuery($cartId: UUID) {

    allCartAddresses(condition: {cartId: $cartId, addressType: 1}) {
      nodes {
        pincode
      }
    }
  }
  `;

  export const countries = `
query MyCountries{
  allMasterCountries(condition: { isActive: true }, orderBy: ID_ASC) {
    nodes {
      currency
      currencyAlias
      currencySymbol
      fxConversionRate
      id
      isActive
      iso
      iso3
      name
      nicename
      numcode
      phonecode
    }
  }
  }
  `;
