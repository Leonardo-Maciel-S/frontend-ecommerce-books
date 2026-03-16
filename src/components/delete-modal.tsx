import { Box, Modal, Typography } from "@mui/material";
import { Loader2, Trash2 } from "lucide-react";
import PrimaryButton from "./primary-button";

interface DeleteModalProps {
  id?: string;
  whoDelete: string;
  isPending: boolean;
  isModalOpen: boolean;
  handleModal: () => void;
  handleDelete: (id?: string) => void;
}

const DeleteModal = ({
  id,
  whoDelete,
  isPending,
  isModalOpen,
  handleDelete,
  handleModal,
}: DeleteModalProps) => {
  return (
    <Modal
      className="flex justify-center items-center"
      open={isModalOpen}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="w-fit py-8 px-10 rounded-lg bg-white flex flex-col gap-6">
        <div>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h1"
            className="text-red-500"
          >
            Excluir {whoDelete}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ fontSize: 18 }}
            className="text-zinc-500"
          >
            Tem certeza? Essa ação não pode ser desfeita
          </Typography>
        </div>

        <PrimaryButton onClick={() => handleDelete(id)} disabled={isPending}>
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Trash2 strokeWidth={3} />
          )}
        </PrimaryButton>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
