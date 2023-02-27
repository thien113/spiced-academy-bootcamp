import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledButton } from "../Button/Button.styled";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";
import { useState } from "react";

export default function Product({ onSubmit, onDelete }) {
  const router = useRouter();
  const { id } = router.query;
  const [isEditing, setisEditing] = useState(false);

  const { data, isLoading } = useSWR(id ? `/api/products/${id}` : null);

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledButton
        onClick={() => {
          setisEditing(!isEditing);
        }}
      >
        Edit
      </StyledButton>
      {isEditing && <ProductForm isEditing={isEditing} onSubmit={onSubmit} />}
      <StyledButton
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </StyledButton>
      <StyledButton type="button" onClick={() => router.push("/")}>
        Back to all
      </StyledButton>
    </ProductCard>
  );
}
