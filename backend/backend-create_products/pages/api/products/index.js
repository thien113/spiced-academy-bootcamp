import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const fishData = request.body;
      // We're declaring fishData to contain the body of our request sent by our form that we haven't created yet.
      // The body of our request might contain data in a variety of formats, but is typically an object.
      const fish = new Product(fishData);
      // Utilizing our fish scheme, we're creating a new fish.
      // At this point we're sanitizing our data according to the schema of our fish model.
      await fish.save();
      // We've created a new fish, now we're calling save() to have mongoose insert a new document into our database.

      // The three lines above are functionally the same as:
      // fish.create(request.body)
      // It's just a somewhat less opaque way.

      response.status(201).json({ status: "Product created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
