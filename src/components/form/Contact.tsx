"use client";
import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { ReactElement, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";

export default function Contact(): ReactElement {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpenModal(!openModal)}
        className="flex items-center"
      >
        <HiOutlinePhone className="w-5 h-5" />
        <span className="ms-0 md:ms-2 hidden md:block">Hubungi Saya</span>
      </Button>
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
