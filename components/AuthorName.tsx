import React from "react";

interface AuthorNameProps {
  name: string;
}

export default function AuthorName({ name }: AuthorNameProps) {
  return (
    <h1 className="font-black text-3xl sm:text-5xl">{name}</h1>
  )
}