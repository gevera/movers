module.exports = {
  title: 'Movers for you',
  description: 'The Perfect Move',
  themeConfig: {
    search: false,
    displayAllHeaders: true,
      nav:[
       { text: 'Social',
        items: [
                 {text: 'Like us on Facebook', link: 'https://www.facebook.com' },
	             {text: 'Review us on Yelp', link: 'https://www.yelp.com'}
               ]
       }
      ],
      sidebar: [
      '/',
      '/about',
      '/services',
      '/quote',
      '/gallery'
      ]
  }
}
