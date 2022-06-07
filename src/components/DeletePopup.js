import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeletePopup({ isOpen, onClose, onDelete, card }) {
  function handleSubmit(event) {
    event.preventDefault();
    onDelete(card);
  }
  return (
    <PopupWithForm
      name={"delete"}
      isOpen={isOpen}
      title={"Вы уверены?"}
      onClose={onClose}
      buttonText={"Да"}
      onSubmit={handleSubmit}
    />
  );
}

export default DeletePopup;
