import { FiX } from "react-icons/fi";
import Modal from "react-modal";
import {
  ModalDefaultWrapperContent,
  ModalDefaultWrapperHeader,
} from "./styles";

Modal.setAppElement("#modal");

type ModalDefaultWrapperProps = {
  children: React.ReactNode;
  isOpenModal: boolean;
  closeModal: () => void;
  ModalIcon: React.ReactNode;
  modalTitle: string;
};

export function ModalDefaultWrapper({
  children,
  closeModal,
  isOpenModal,
  ModalIcon,
  modalTitle,
}: ModalDefaultWrapperProps) {
  return (
    <Modal
      className="modal-default-wrapper"
      overlayClassName="modal-default-wrapper-overlay"
      isOpen={isOpenModal}
      onRequestClose={(e) => {
        e.stopPropagation();
        closeModal();
      }}
      contentLabel="Example Modal"
      portalClassName="modal-default-wrapper-portal"
      shouldFocusAfterRender={false}
    >
      <ModalDefaultWrapperHeader>
        <div>
          {ModalIcon}
          <strong className="body1-medium">{modalTitle}</strong>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          <FiX />
        </button>
      </ModalDefaultWrapperHeader>
      <ModalDefaultWrapperContent>{children}</ModalDefaultWrapperContent>
    </Modal>
  );
}
