// Body-shape data shared across all three variations.
// Proportions are visual half-widths on a 0–100 scale.
window.EYSE = {
  shopUrl: 'https://eyse.co/collections/all',
  home: 'https://eyse.co/',
};
window.SHAPES = [
  {
    id: 'hourglass',
    name: 'Hourglass',
    shopUrl: 'https://eyse.co/collections/all?filter.p.m.custom.body_shape4=gid%3A%2F%2Fshopify%2FMetaobject%2F184636080202&sort_by=best-selling',
    photo: 'fig-hourglass.png',
    tagline: 'Shoulders meet hips, waist nips in.',
    proportions: { shoulders: 78, waist: 50, hips: 78 },
    bgTone: '#ece4d6',
    inkTone: '#2a241c',
    characteristics: [
      ['Shoulders', 'Match hips in width'],
      ['Waist', 'Clearly defined, nipped in'],
      ['Hips', 'Equal to shoulders, soft curve'],
    ],
    stylingFor: 'Wrap silhouettes, belted sets, anything that traces the waist.',
    products: [
      { name: 'Sloane Wrap Top & Wide-Leg Trousers', price: '$100', note: 'The wrap traces your waist' },
      { name: 'Margot Shoulder Tab Top & Midi Skirt', price: '$100', note: 'A nipped midi that follows your curve' },
    ],
  },
  {
    id: 'inverted',
    name: 'Inv. Triangle',
    altName: 'Inverted Triangle',
    shopUrl: 'https://eyse.co/collections/all?filter.p.m.custom.body_shape4=gid%3A%2F%2Fshopify%2FMetaobject%2F184635064394&sort_by=best-selling',
    photo: 'fig-inverted.png',
    tagline: 'Wider up top, narrower below.',
    proportions: { shoulders: 86, waist: 62, hips: 58 },
    bgTone: '#e7dcc9',
    inkTone: '#2a241c',
    characteristics: [
      ['Shoulders', 'Broader than the hips'],
      ['Waist', 'Subtle, falls between'],
      ['Hips', 'The narrowest line'],
    ],
    stylingFor: 'Volume below — flare skirts, wide-leg pants, soft tops to balance the line.',
    products: [
      { name: 'Lauren Linen Vest & Bubble Skirt', price: '$100', note: 'Bubble hem adds the volume below' },
      { name: 'Chloe Crochet Top & A-Line Skirt', price: '$140', note: 'A-line balances broader shoulders' },
    ],
  },
  {
    id: 'apple',
    name: 'Apple',
    shopUrl: 'https://eyse.co/collections/all?filter.p.m.custom.body_shape4=gid%3A%2F%2Fshopify%2FMetaobject%2F184638013514&sort_by=best-selling',
    photo: 'fig-apple.png',
    tagline: 'Soft middle, slim limbs.',
    proportions: { shoulders: 70, waist: 78, hips: 68 },
    bgTone: '#efe6dc',
    inkTone: '#2a241c',
    characteristics: [
      ['Shoulders', 'Even with hips'],
      ['Waist', 'The fullest line, soft volume'],
      ['Hips', 'Slimmer, with leaner legs'],
    ],
    stylingFor: 'Long, fluid silhouettes — V-necks, drape, sets that fall away from the middle.',
    products: [
      { name: 'Olivia Pearl Cardigan & Pleated Maxi Dress', price: '$150', note: 'A column that skims the middle' },
      { name: 'Sloane Wrap Top & Wide-Leg Trousers', price: '$100', note: 'Open neckline draws the eye up' },
    ],
  },
  {
    id: 'rectangle',
    name: 'Rectangle',
    shopUrl: 'https://eyse.co/collections/all?filter.p.m.custom.body_shape4=gid%3A%2F%2Fshopify%2FMetaobject%2F184635031626&sort_by=best-selling',
    photo: 'fig-rectangle.png',
    tagline: 'Top, middle, and bottom in one straight line.',
    proportions: { shoulders: 70, waist: 66, hips: 68 },
    bgTone: '#e3dccf',
    inkTone: '#2a241c',
    characteristics: [
      ['Shoulders', 'Aligned with hips'],
      ['Waist', 'Very gentle, barely tapered'],
      ['Hips', 'Within a few of the shoulders'],
    ],
    stylingFor: 'Create curve — belted sets, layered pieces, ruched and gathered waists.',
    products: [
      { name: 'Lauren Linen Vest & Bubble Skirt', price: '$100', note: 'Bubble hem builds curve at the hip' },
      { name: 'Olivia Pearl Cardigan & Pleated Maxi Dress', price: '$150', note: 'Layered shapes add dimension' },
    ],
  },
  {
    id: 'pear',
    name: 'Pear',
    shopUrl: 'https://eyse.co/collections/all?filter.p.m.custom.body_shape4=gid%3A%2F%2Fshopify%2FMetaobject%2F184637358154&sort_by=best-selling',
    photo: 'fig-pear.png',
    tagline: 'Narrower up top, fuller below.',
    proportions: { shoulders: 60, waist: 58, hips: 82 },
    bgTone: '#e9dfd0',
    inkTone: '#2a241c',
    characteristics: [
      ['Shoulders', 'Narrower than the hips'],
      ['Waist', 'Naturally defined'],
      ['Hips', 'The fullest line'],
    ],
    stylingFor: 'Draw the eye up — boat necks, structured tops, fluid bottoms.',
    products: [
      { name: 'Eloise Lace-Trim Blazer & Pants', price: '$190', note: 'Structured shoulder balances the hip' },
      { name: 'Linda Square-Neck Vest & Pants', price: '$120', note: 'Square neck widens the upper line' },
    ],
  },
];
