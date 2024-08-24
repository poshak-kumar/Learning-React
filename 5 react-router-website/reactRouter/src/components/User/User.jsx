import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="bg-gray-400 text-white p-6 text-5xl mt-4 mb-4">
      User: {id}{" "}
    </div>
  );
}

export default User;
