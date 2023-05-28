import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike slim shirt',
      slug: 'Nike-slim-shirt',
      category: 'Shirts',
      images: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },

    {
      //_id: '2',
      name: 'Adidas fit shirt',
      slug: 'Adidas-fit-shirt',
      category: 'Shirts',
      images: '/images/p2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },

    {
      //_id: '3',
      name: 'Nike fit pant',
      slug: 'nike-fit-pant',
      category: 'Shirts',
      images: '/images/p3.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality shirt',
    },

    {
      //_id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'pants',
      images: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
  ],
};
export default data;
