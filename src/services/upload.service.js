export const uploadService = {
  uploadImg,
};

async function uploadImg(file) {
  const UPLOAD_PRESET = 'ml_default';
  const CLOUD_NAME = 'dbf0uxszt';

  const formData = new FormData();
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('file', file);

  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  try {
    const formData = new FormData();
    formData.append('upload_preset', UPLOAD_PRESET);
    formData.append('file', file);

    const res = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    });

    const { url } = await res.json();
    return url;
  } catch (err) {
    console.error('Failed to upload', err);
    throw err;
  }
}
