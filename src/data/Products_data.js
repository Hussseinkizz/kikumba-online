import Image1 from '../../static/media/images/shoe/sh1.jpg';
import Image2 from '../../static/media/images/shoe/sh8.jpg';
import Image3 from '../../static/media/images/shoe/sh3.jpg';
import Image4 from '../../static/media/images/shoe/sh4.jpg';
import Image5 from '../../static/media/images/shoe/sh12.jpg';
import Image6 from '../../static/media/images/shoe/sh10.jpg';

//todo: fetch these from backend server... firestore!

const Products = [
  {
    'id' : 1,
    'quantity' : 1,
    'name' : 'Nike Blur',
    'image' : Image1,
    'price' : 47000
  },
  {
    'id' : 2,
    'quantity' : 1,
    'name' : 'Multi Color',
    'image' : Image2,
    'price' : 35000
  },
  {
    'id' : 3,
    'quantity' : 1,
    'name' : 'Lofers Leathal',
    'image' : Image3,
    'price' : 77000
  },
  {
    'id' : 4,
    'quantity' : 1,
    'name' : 'Converse',
    'image' : Image4,
    'price' : 40000
  },
  {
    'id' : 5,
    'quantity' : 1,
    'name' : 'Adidas SPLY',
    'image' : Image5,
    'price' : 60000
  },
  {
    'id' : 6,
    'quantity' : 1,
    'name' : 'Wave Runner',
    'image' : Image6,
    'price' : 50000
  }
]

export default Products;