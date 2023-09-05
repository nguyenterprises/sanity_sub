export default {
  name: 'listing',
  type: 'document',
  title: 'Listing',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'street',
      type: 'string',
      title: 'Street',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
    },
    {
      name: 'zip',
      type: 'string',
      title: 'Zip Code',
    },
    {
      name: 'bedrooms',
      type: 'number',
      title: 'Bedrooms',
    },
    {
      name: 'bathrooms',
      type: 'number',
      title: 'Bathrooms',
    },
    {
      name: 'sqft',
      type: 'number',
      title: 'Sqft',
    },
    {
      name: 'lot',
      type: 'number',
      title: 'Lot Area',
    },
    {
      name: 'garage',
      type: 'string',
      title: 'Garage',
    },

    {
      name: 'askPrice',
      type: 'number',
      title: 'Asking Price',
    },
    {
      name: 'soldPrice',
      type: 'number',
      title: 'Sold Price',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Sale Status',
      initialValue: 'Available',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Sold', value: 'sold'},
          {title: 'Under Contract', value: 'pending'},
          {title: 'No Longer Available', value: 'na'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'listDate',
      type: 'date',
      title: 'List Date',
    },
    {
      name: 'soldDate',
      type: 'date',
      title: 'Sold Date',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },

    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative Text',
        },
      ],
    },
    {
      name: 'imageGallery',
      type: 'array',
      title: 'Image Gallery - drag & drop for multiple images',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'agent',
      type: 'string',
      title: 'Agent',
      initialValue: 'Keanu Reeves',
      options: {
        list: [
          {title: 'Keanu Reeves', value: 'keanu_reeves'},
          {title: 'Caine', value: 'caine'},
          {title: 'Winston Scott', value: 'winston_scott'},
          {title: 'Vincent Bassett de Gramont', value: 'vincent_bassett'},
          {title: "Santino D'Antonio", value: 'santino_dantonio'},
          {title: 'Vigo Tarasov', value: 'vigo_tarasov'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'iframe',
      type: 'string',
      title: 'Iframe',
    },
  ],
}
