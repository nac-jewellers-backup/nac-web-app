export const CDNPAGES = (url) => {
    return `
    query MyQuery{
        cdnByPage(page: "${url}") {
          data
          id
          page
          isActive
        }
      }
    `;
} 

export const ALLCDNPAGES = `query MyQuery {
  allCdns {
    nodes {
      page
      data
      isActive
    }
  }
}
`;