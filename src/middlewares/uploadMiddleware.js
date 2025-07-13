import multer from 'multer';
import path from 'path';
import fs from 'fs';

export function createUploadMiddleware(
  subFolderParamOrFn = 'id',
  fileFieldName = 'image',
  baseFolder = 'images'
) {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let folderName;

      if (typeof subFolderParamOrFn === 'function') {
        folderName = subFolderParamOrFn(req);
      } else {
        folderName = req.params[subFolderParamOrFn];
      }

      if (!folderName) {
        return cb(new Error('Missing folder name for upload'));
      }

      const uploadPath = path.join('public', baseFolder, folderName);

      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
      }

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
