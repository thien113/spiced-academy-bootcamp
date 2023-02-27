import Product from "../components/product";
import { useRouter } from "next/router";
import useSWRMutation from "swr/mutation";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  async function updateProduct(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  const { trigger, isMutating } = useSWRMutation(
    `/api/products/${id}`,
    updateProduct
  );

  async function handleEditProduct(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const productData = Object.fromEntries(formData);
      await trigger(productData);
      router.push("/");
      console.log("inside handleEditProduct");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, { method: "DELETE" });
    if (response.ok) {
      router.push("/");
    } else {
      console.log(response.status);
    }
  }
  if (isMutating) {
    return <div>Submitting your changes.</div>;
  }
  return (
    <>
      <Product onSubmit={handleEditProduct} onDelete={handleDeleteProduct} />
    </>
  );
}
