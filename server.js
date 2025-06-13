const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Aquí vamos a importar los productos de tu app
const products = [
            { id: 1, name: "Laptop Ultra HD", description: "Potente laptop con procesador de última generación, 16GB RAM y 512GB SSD.", image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/cart-3007671_960_720.jpg", price: 1299.99, stock: 10, category: "laptops" },
            { id: 2, name: "Smartphone Pro X", description: "Smartphone con pantalla AMOLED de 6.5 pulgadas, cámara de 64MP y batería de larga duración.", image: "https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_960_720.jpg", price: 899.99, stock: 15, category: "smartphones" },
            { id: 3, name: "Tablet Air", description: "Tablet delgada y ligera con pantalla retina de 10.9 pulgadas y chip A14 Bionic.", image: "https://cdn.pixabay.com/photo/2015/02/02/15/28/office-621133_960_720.jpg", price: 499.99, stock: 8, category: "tablets" },
            { id: 4, name: "Auriculares Noise-Cancelling", description: "Auriculares inalámbricos con cancelación de ruido y 20 horas de batería.", image: "https://cdn.pixabay.com/photo/2016/09/27/22/01/headphone-1699626_960_720.jpg", price: 249.99, stock: 20, category: "audio" },
            { id: 5, name: "Monitor Curvo 4K", description: "Monitor curvo de 32 pulgadas con resolución 4K y tecnología HDR.", image: "https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg", price: 399.99, stock: 5, category: "monitors" },
            { id: 6, name: "Smartwatch Series 7", description: "Reloj inteligente con monitoreo de salud, GPS y resistencia al agua.", image: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_960_720.jpg", price: 349.99, stock: 12, category: "accessories" },
            { id: 7, name: "Smartphone Alpha", description: "Smartphone Alpha con pantalla AMOLED, 128GB de almacenamiento y cámara de 48MP.", image: "https://cdn.pixabay.com/photo/2016/11/29/05/08/phone-1867461_960_720.jpg", price: 699.99, stock: 20, category: "smartphones" },
            { id: 8, name: "Smartphone Quantum", description: "Smartphone Quantum con procesador octa-core, 256GB de almacenamiento y cámara de 64MP.", image: "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_960_720.jpg", price: 799.99, stock: 15, category: "smartphones" },
            { id: 9, name: "Smartphone Nova", description: "Smartphone Nova con pantalla infinity, 128GB de almacenamiento y cámara triple de 36MP.", image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg", price: 649.99, stock: 18, category: "smartphones" },
            { id: 10, name: "Smartphone Galaxy", description: "Smartphone Galaxy con pantalla OLED, 512GB de almacenamiento y cámara de 108MP.", image: "https://cdn.pixabay.com/photo/2016/11/10/16/18/phone-1814689_960_720.jpg", price: 899.99, stock: 10, category: "smartphones" },
            { id: 11, name: "Smartphone Pixel", description: "Smartphone Pixel con el mejor sistema de fotografía, 256GB y batería de larga duración.", image: "https://cdn.pixabay.com/photo/2017/01/06/13/50/smartphone-1957740_960_720.jpg", price: 849.99, stock: 12, category: "smartphones" },
            { id: 12, name: "Smartphone UltraSlim", description: "El smartphone más delgado del mercado con pantalla AMOLED y 128GB de almacenamiento.", image: "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_960_720.jpg", price: 749.99, stock: 25, category: "smartphones" },
            { id: 13, name: "Smartphone TechPro", description: "Smartphone TechPro con pantalla resistente a golpes, 256GB y cámara profesional de 50MP.", image: "https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202_960_720.jpg", price: 779.99, stock: 14, category: "smartphones" },
            { id: 14, name: "Smartphone Infinity", description: "Smartphone Infinity con pantalla sin bordes, 512GB y batería de 5000mAh.", image: "https://cdn.pixabay.com/photo/2017/12/11/18/13/smartphone-3012535_960_720.jpg", price: 829.99, stock: 8, category: "smartphones" },
            { id: 15, name: "Smartphone MegaPixel", description: "Smartphone MegaPixel con la mejor cámara del mercado, 256GB y procesador ultra rápido.", image: "https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg", price: 859.99, stock: 16, category: "smartphones" },
            { id: 16, name: "Smartphone Titan", description: "Smartphone Titan resistente al agua y golpes, 128GB y batería que dura 2 días.", image: "https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg", price: 729.99, stock: 22, category: "smartphones" }
          ];

// Ruta para obtener todos los productos
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/', (req, res) => {
  res.send('ElectroMarket API está funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
