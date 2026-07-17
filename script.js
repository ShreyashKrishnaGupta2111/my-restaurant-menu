body {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;

  /* Background Image */
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
  url("https://images.unsplash.com/photo-1498654896293-37aacf113fd9");
  background-size: cover;
  background-position: center;
  color: white;
}

h1 {
  margin-top: 20px;
  font-size: 40px;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

/* Card Design */
.card {
  background: white;
  color: black;
  width: 220px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.3);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

button {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #e60000;
}

/* Order Button */
.order-btn {
  display: inline-block;
  margin: 20px;
  padding: 12px 20px;
  background: green;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  font-size: 18px;
}
