import { Router } from "express";
import multer from "multer";
import { uploadFile } from "../services/s3.service";
import { sendMessage } from "../services/sqs.service";

const router = Router();
const upload = multer();

router.post("/", upload.single("archivo"), async (req, res) => {
  try {
    const { mensaje, correo } = req.body;
    const file = req.file;

    if (!file || !mensaje || !correo) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    // 1. Subir a S3
    const fileUrl = await uploadFile(file);

    // 2. Enviar a SQS
    await sendMessage({
      mensaje,
      correo,
      fileUrl,
    });

    res.json({
      message: "Boletín enviado correctamente",
      fileUrl,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno" });
  }
});

export default router;