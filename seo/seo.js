var seo = (title, description, imgURL) => {
  if (!title) {
    return (title =
      "NAC Jewellers - Online Jewellery Shopping Store South India | Buy Gold, Diamond, Platinum and Antique Jewellery with latest Designs 2022");
  }
  if (!description) {
    return (description = " ");
  }
  if (!imgURL) {
    return (imgURL = " ");
  }

  return `

    <title id="title">${title} </title>
  <meta name='facebook-domain-verification' content='' />  
  <meta name='description'   content='${description}'  />
  <meta name='keywords'  content='NAC Jewellers - Online Jewellery Shopping Store South India | Buy Gold, Diamond, Platinum and Antique Jewellery with latest Designs 2022' />
 
  <meta property='og:title'  content='${title}' />
  <meta property='og:description'  content='${description}'/>
  <meta property='og:url'  content="https://staging.nacjewellers.net/" />
  <meta property='og:image'  content='${imgURL}' />
  <meta property="og:type" content="website">
 
  <meta property='twitter:card' content='summary' />
  <meta property='twitter:site' content='@NACJEWELLERS' />
  <meta property='twitter:title'  content='${title}' />
  <meta property='twitter:description' content='${description}' />
  <meta property='twitter:image' content='${imgURL}' /> 
  <meta property="twitter:url" content="https://staging.nacjewellers.net/">`;
};
module.exports = { seo };
