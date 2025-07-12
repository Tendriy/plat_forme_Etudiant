import multer from 'multer';
import path from 'path';
import fs from 'fs';

export function createUploadMiddleware(subFolderParam = 'id', fileFieldName = 'image', baseFolder = 'images') {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const folderName = req.params[subFolderParam];
      const uploadPath = path.join('public', baseFolder, folderName);
      fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const filename = `${Date.now()}${ext}`;
      cb(null, filename);
    },
  });

  return multer({ storage }).single(fileFieldName);
}
