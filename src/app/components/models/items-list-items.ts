export class ItemsListItem {
  categoryId: number;
  colorVariant: string;
  content: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  rate: number;
  review: number;
  subCategoryId: number;
  typeVariant: string;
  wishlist: boolean;
  addToCart: boolean;
  constructor(userResponse: any) {
    this.categoryId = userResponse.categoryId;
    this.colorVariant = userResponse.colorVariant;
    this.content = userResponse.content;
    this.id = userResponse.id;
    this.imageUrl = userResponse.imageUrl;
    this.name = userResponse.name;
    this.price = userResponse.price;
    this.rate = userResponse.rate;
    this.review = userResponse.review;
    this.subCategoryId = userResponse.subCategoryId;
    this.typeVariant = userResponse.typeVariant;
    this.wishlist = userResponse.wishlist;
    this.addToCart = userResponse.addToCart;

  }
}

// export class ItemsListItem {
//   cat: number;
//   image: string;
//   label: string;
//   color: string;
//   category: string;
//   categoryId: string;
//   productId: string;
//   constructor(inputObj) {
//     if (inputObj) {
//       this.cost = Number(inputObj.cost);
//       this.image = inputObj.image;
//       this.label = inputObj.label;
//       this.color = inputObj.color;
//       this.category = inputObj.category;
//       this.categoryId = inputObj.categoryId;
//       this.productId = inputObj.productId;
//     }
//   }
// }
/*
categoryId: 7
colorVariant: "2"
content: "Sapiente quibusdam pariatur deserunt optio atque voluptatum ducimus alias. Sint neque aut a recusandae eaque pariatur doloribus. Non explicabo quidem sequi ad omnis. Molestiae doloribus earum consequatur doloremque."
id: 358
imageUrl: "https://dummyimage.com/116x403"
name: "Molestias"
price: 286
rate: 4.69
review: 180
subCategoryId: 114
typeVariant: "A"
*/
