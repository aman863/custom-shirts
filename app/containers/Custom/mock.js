const topLevelTabs = [
  {
    id: 'apparel',
    name: 'Change Apparel',
  },
  {
    id: 'element',
    name: 'Add Elements',
  },
  {
    id: 'detail',
    name: 'Product and Order Details',
  },
];

const lowLevelTabs = {
  apparel: [
    {
      name: 'Sweaters and Sleeves',
      id: 'sweater',
    }, {
      id: 'shirt',
      name: 'Tees and Tanks',
    }, {
      name: 'Pants and Shorts',
      id: 'bottom',
    }, {
      name: 'Accessories and Hats',
      id: 'accessory',
    },
  ],
  element: [
    {
      name: 'All',
      id: 'all',
    }, {
      name: 'Emoji',
      id: 'emoji',
    }, {
      name: 'Artwork',
      id: 'art',
    },
  ],
};

const apparelTypes = {
  sweater: [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/ezyfi-184d0.appspot.com/o/crew_front.png?alt=media&token=1d10ea4a-0ac8-4b58-a3f9-6dfaa7de5a27',
      name: 'Gilden sweater techno defender sample',
      defaultVariant: 'grey',
      price: 23.99,
      sizes: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'],
      variants: [
        {
          name: 'navy',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/techno_defender/navy1.jpg',
        },
        {
          name: 'grey',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/techno_defender/grey1.jpg',
        },
        {
          name: 'red',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/techno_defender/red1.jpg',
        },
      ],
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/ezyfi-184d0.appspot.com/o/crew_front.png?alt=media&token=1d10ea4a-0ac8-4b58-a3f9-6dfaa7de5a27',
      name: 'Gilden quarter zip fleece sweater',
      defaultVariant: 'black',
      price: 30.99,
      sizes: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
      variants: [
        {
          name: 'red',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/quarter_zip/18800-red_A1_large.jpg',
        }, {
          name: 'black',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/quarter_zip/navy2.jpg',
        },
      ],
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/ezyfi-184d0.appspot.com/o/crew_front.png?alt=media&token=1d10ea4a-0ac8-4b58-a3f9-6dfaa7de5a27',
      name: 'Gilden t-shirt 200',
      defaultVariant: 'white',
      price: 13.99,
      sizes: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
      variants: [
        {
          name: 'white',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/2001/2001_white.jpg',
        }, {
          name: 'red',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/2001/2001_red.jpg',
        }, {
          name: '#BCE7EE',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/2001/2001_aqua.jpg',
        }, {
          name: '#5E2432',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/2001/2001_truffle.jpg',
        },
      ],
    },
  ],
  shirt: [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/ezyfi-184d0.appspot.com/o/crew_front.png?alt=media&token=1d10ea4a-0ac8-4b58-a3f9-6dfaa7de5a27',
      name: 'Gilden t-shirt 200',
      defaultVariant: 'white',
      price: 13.99,
      sizes: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
      variants: [
        {
          name: 'white',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/2001/2001_white.jpg',
        }, {
          name: 'red',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/2001/2001_red.jpg',
        }, {
          name: '#BCE7EE',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/2001/2001_aqua.jpg',
        }, {
          name: '#5E2432',
          image: 'https://s3.amazonaws.com/shirts.qthreads/shirtpictures/gilden/2001/2001_truffle.jpg',
        },
      ],
    },
  ],
};

export {
  topLevelTabs,
  lowLevelTabs,
  apparelTypes,
};
