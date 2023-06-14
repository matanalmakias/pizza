import { tel } from "./utils";

export const header1 = {
  callUsBtn: {
    tel,
    icon: `fas fa-phone`,
  },
  menu: [
    { _id: `1`, name: `ראשי`, linkPath: `/`, dropdown: false },
    ,
    {
      _id: `12`,
      name: `אודות`,
      linkPath: `/about`,
      dropdown: true,
      items: [
        {
          _id: `1`,
          text: `גלריית תמונות`,
          link: `/gallery`,
        },
        {
          _id: `2`,
          text: `שאלות נפוצות`,
          link: `/faqs`,
        },
        {
          _id: `3`,
          text: `תנאים ופרטיות`,
          link: `/terms`,
        },
      ],
    },
    {
      _id: `3`,
      name: `תפריט`,
      linkPath: `/menu-2`,
      dropdown: false,
    },
    {
      _id: `4`,
      name: `צור קשר`,
      linkPath: `#`,
      dropdown: true,
      items: [
        {
          _id: `1`,
          text: `תזמן משלוח`,
          link: `/schudleDelivery`,
        },
        {
          _id: `2`,
          text: `סניפים שלנו`,
          link: `/locations`,
        },
        {
          _id: `3`,
          text: `צור קשר`,
          link: `/contacts`,
        },
      ],
    },
    {
      _id: `5`,
      name: `בלוג`,
      linkPath: `/blog-listing`,
      dropdown: false,
    },
  ],
};
