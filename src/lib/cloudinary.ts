export function buildCloudinaryUrl(publicId: string, cloudName: string, width = 1200) {
  if (!cloudName || cloudName === 'YOUR_CLOUDINARY_CLOUD_NAME') {
    return publicId;
  }

  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_${width},c_fill/${publicId}`;
}
