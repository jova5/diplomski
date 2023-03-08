const convertImageToBase64 = (file: File | undefined) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    if (file !== undefined) {
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    } else {
      resolve("");
    }
  });
};

export {convertImageToBase64};
