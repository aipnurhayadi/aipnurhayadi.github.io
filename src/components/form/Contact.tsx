"use client";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { ReactElement, useState } from "react";

export default function Contact(): ReactElement {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenModal(!openModal)}>Hubungi Saya</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Hubungi Saya</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              Fitur sedang dalam pembangunan
            </p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
