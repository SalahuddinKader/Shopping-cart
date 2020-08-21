import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products] = useState([
    {
      _id: "1",
      title: "Nike Shoes 01",
      src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
      description:
        "Best shoes in the world, if you are not agree up to you !!! ",
      content: "Best shoes in the world, if you are not agree up to you !!! ",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
      review: "(2 Reviews)",
    },
    {
      _id: "2",
      title: "Nike Shoes 02",
      src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
      description:
        "Best shoes in the world, if you are not agree up to you !!! ",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 19,
      colors: ["red", "crimson", "teal"],
      count: 1,
      review: "(7 Reviews)",
    },
    {
      _id: "3",
      title: "Nike Shoes 03",
      src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
      description:
        "Best shoes in the world, if you are not agree up to you !!! ",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 50,
      colors: ["lightblue", "white", "crimson", "teal"],
      count: 1,
      review: "(3Reviews)",
    },
    {
      _id: "4",
      title: "Nike Shoes 04",
      src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
      description:
        "Best shoes in the world, if you are not agree up to you !!! ",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 15,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
      review: "(23 Reviews)",
    },
    {
      _id: "5",
      title: "Nike Shoes 05",
      src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
      description:
        "Best shoes in the world, if you are not agree up to you !!! ",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 10,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
      review: "(5 Reviews)",
    },
    {
      _id: "6",
      title: "Nike Shoes 06",
      src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
      description:
        "Best shoes in the world, if you are not agree up to you !!! ",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 17,
      colors: ["orange", "black", "crimson", "teal"],
      count: 1,
      review: "(12 Reviews)",
    },
  ]);

  // const handleProduct = () => {
  //   products.map((product) => product);
  // };

  const [cart, setCart] = useState([]);

  //Add to the Cart && check alert
  const addCart = (id) => {
    const check = cart.every((item) => item._id !== id);
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      toast.success(" Product Added to bag", { autoClose: 1000 });
      setCart((prevData) => [...prevData, ...data]);
    } else {
      toast.warning("This product has been added to bag", { autoClose: 3000 });
    }
  };

  //Handle increment and Decrement
  const [increment, setIncrement] = useState([]);
  const [decrement, setDecrement] = useState([]);

  const handleIncrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setIncrement({ cart: increment });
    handleTotal();
  };

  //Decrement
  const handleDecrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setDecrement({ cart: decrement });
    handleTotal();
  };

  //Delete from Cart
  const [remove, setRemove] = useState([]);
  const handleRemove = (id) => {
    cart.forEach((item, i) => {
      if (item._id === id) {
        cart.splice(i, 1);
      }
    });
    setRemove({ cart: remove });
  };

  //Add total in the cart
  const [total, setTotal] = useState(0);
  const handleTotal = () => {
    const total = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    setTotal(total);
  };

  //remove all
  const removeAll = () => {
    setCart([]);
  };

  //NEED TO WORK ON IT

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);
  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          handleIncrement,
          handleDecrement,
          handleRemove,
          total,
          handleTotal,
          removeAll,
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
};
