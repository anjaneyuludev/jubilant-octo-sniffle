import React from 'react';

const ItemsDisplay = () => {
  const items = [
    { id: 1, name: 'Pizza', image:'/fooditem-1.jpg' },
    { id: 2, name: 'Healthy Food', image: '/imagepizza.jpg' },
    { id: 3, name: 'Healthy Food', image: '/fooditem.jpg' },
     { id: 4, name: 'Healthy Food', image: '/fooditem-2.jpg' },
     { id: 5, name: 'Healthy Food ',image: '/Brownie-Shake-742*1024.jpg' },
  ];                                                            

  return (
    <div>
      <h2>Food Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} width="200" />
        </div>
      ))}
    </div>
  );
};

export default ItemsDisplay;
