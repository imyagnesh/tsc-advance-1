const loadData = async () => {
  // const res = await fetch("http://localhost:8080/categories");

  // const json = await res.json();

  // console.log(json);

  // console.time("api")
  // const categories = await fetch("http://localhost:8080/categories");
  // const products = await fetch("http://localhost:8080/products");
  // const banners = await fetch("http://localhost:8080/banners");

  // const categoriesJSON = await categories.json()
  // const productsJSON = await products.json()
  // const bannersJSON = await banners.json()

  // console.log(categoriesJSON);
  // console.log(productsJSON);
  // console.log(bannersJSON);
  // console.timeEnd("api")

  console.time("api");
  const res = await Promise.allSettled([
    fetch("http://localhost:8080/categories"),
    fetch("http://localhost:8080/products"),
    fetch("http://localhost:8080/banners"),
  ]);

  const json = await Promise.all(res.map((x) => x.value.json()));

  console.log("categories", json[0]);
  console.log("products", json[1]);
  console.log("banners", json[2]);
  console.timeEnd("api");
};
loadData();
