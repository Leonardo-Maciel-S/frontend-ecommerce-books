import { Box, Modal, Typography } from "@mui/material";
import PrimaryButton from "./primary-button";

interface UnderImplementationProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "Funcionalidade em desenvolvimento";
const DEFAULT_DESCRIPTION =
  "Esta funcionalidade ainda nao esta disponível. Tente novamente em breve.";

const UnderImplementation = ({
  isOpen,
  onClose,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: UnderImplementationProps) => {
  return (
    <Modal
      className="flex justify-center items-center"
      open={isOpen}
      onClose={onClose}
      aria-labelledby="under-implementation-title"
      aria-describedby="under-implementation-description"
    >
      <Box className="w-full max-w-lg py-8 px-10 rounded-lg bg-background flex flex-col gap-6 mx-4">
        <div className="flex flex-col gap-4">
          <Typography
            id="under-implementation-title"
            variant="h5"
            component="h2"
            style={{ fontWeight: "700" }}
            className="text-primary text-center lg:text-sm"
          >
            {title}
          </Typography>
          <Typography
            id="under-implementation-description"
            className="text-zinc-500 text-center "
            style={{ fontWeight: "500" }}
          >
            {description}
          </Typography>
        </div>

        <PrimaryButton onClick={onClose} className="w-fit mx-auto">
          Fechar
        </PrimaryButton>
      </Box>
    </Modal>
  );
};

export default UnderImplementation;
