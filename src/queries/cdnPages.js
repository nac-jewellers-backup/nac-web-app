export const CDNPAGES = (url) => {
    return `
    query MyQuery{
        cdnByPage(page: "${url}") {
          data
          id
          page
        }
      }
    `;
} 