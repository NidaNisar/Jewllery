import React, { createContext, useState, useEffect } from "react";
import { Products } from "../../productjson";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Apicontext = createContext();

export const Apiprovider = ({ children }) => {
  //const API_URL=process.env.REACT_APP_API_URL;
  
   const API_URL =
   process.env.NODE_ENV === "production"
    ? "https://jewllery-production.up.railway.app"
    : "http://localhost:5000";
  // -------- states
 
  const [options, setoptions] = useState('');
  const [product, setproduct] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    photo: "",
    categoryid: "",
  });
  const [addp, setaddp] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Admin states
  //
  const [cform, setcform] = useState({
    categoryid: "",
    categoryname: "",
  }); // Category sates

  // onchage function
  //
  const categorychange = (e) => {
    setcform({
      ...cform,
      [e.target.name]: e.target.value,
    });
  }; // category
  //
  const handleOptionChange = (e) => {
    const selected = e.target.value;
    setoptions(selected);
    console.log("options are",options)
   

  };

  const handlechange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }; // admin

  // ------- handler function
  // Category
  const addcategory = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/product/addcategory`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cform),
      });

      const data = await res.json();

      if (data.success) {
        fetchcategory();
        Swal.fire({
          icon: "success",
          title: "Succesfull",
          text: data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Please try again.",
      });
    }
  };

  // -------- admin handlerapi
  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("stock", form.stock);
    formData.append("categoryid", form.categoryid);
    formData.append("image", form.photo);
    setproduct((prev) => [
      ...prev,
      {
        ...form,
        preview: URL.createObjectURL(form.photo),
      },
    ]);

    try {
      const res = await fetch(`${API_URL}/api/product/createproduct`, {
        method: "POST",

        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        fetchProducts();
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: data.message || "Product Created",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Unsuccessful",
          text: data.message || "Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Please try again.",
      });
    }
    setForm({
      name: "",
      price: "",
      stock: "",
      photo: "",
      categoryid: "",
    });
    setaddp(false);
  };

  const fetchProducts = async (page = 1, categoryid = "") => {
    try {
      const limit = 8;
      console.log(API_URL)
      const res = await fetch(`${API_URL}/api/product/getAllProducts?page=${page}&limit=${limit}&categoryid=${categoryid}`
      );
      const data = await res.json();

      console.log("API Response:", data);

      setProducts(data.products);
      setcurrentpage(data.page);
      settotalpages(data.pages);
    } catch (err) {
      console.log("Error fetching products:", err);
    }
  };

  const handledelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/product/deleteproduct/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: data.message || "Product Updated",
        });

        setProducts((prev) => prev.filter((item) => item.productId !== id));

        // setaddp(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Unsuccessful",
          text: data.message || "Please try again.",
        });
      }
    } catch (err) {
      console.log("Update error:", err);
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Please try again.",
      });
    }
  };
  const fetchcategory = async () => {
    try {
      const res = await fetch(`${API_URL}/api/product/getcategory`);
      const data = await res.json();
      setcategories(data.data);
    } catch (err) {
      console.log("Error fetching products:", err);
    }
  };

  const updateproduct = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("price", form.price);
    fd.append("stock", form.stock);
    fd.append("categoryid", form.categoryid);

    if (form.photo instanceof File) {
      fd.append("image", form.photo);
    }
    try {
      const res = await fetch(`${API_URL}/api/product/update/${form.productId}`, {
        method: "PATCH",
        body: fd,
      });

      const data = await res.json();
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: data.message || "Product Updated",
        });
        if (data.products) {
          setProducts(data.products);
        }

        setupdate(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Unsuccessful",
          text: data.message || "Please try again.",
        });
      }
    } catch (err) {
      console.log("Update error:", err);
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Please try again.",
      });
    }
  };
  const updatecategory = async (e, categoryid) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/product/updatecategory/${categoryid}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cform),
      });

      const data = await res.json();
      setcategories(data.data);

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Succesfull",
          text: data.message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Please try again.",
      });
    }
  };

  const [Products, setProducts] = useState([]);
  const [categoriees, setcategories] = useState([]);
  const [updateproducts, setupdate] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchcategory();
  }, []);

  return (
    <Apicontext.Provider
      value={{
        options,
        form,
        setaddp,
        setoptions,
        setproduct,
        addp,
        product,

        sidebarOpen,
        setSidebarOpen,
        setForm,
        handleOptionChange,
        handlesubmit,
        handlechange,
        cform,
        setcform,
        categorychange,
        addcategory,
        fetchProducts,
        Products,
        setProducts,
        categoriees,
        setcategories,
        fetchcategory,
        updateproduct,
        updateproducts,
        setupdate,
        handledelete,
        updatecategory,
        currentpage,
        setcurrentpage,
        totalpages,
        settotalpages,
      }}
    >
      {children}
    </Apicontext.Provider>
  );
};
