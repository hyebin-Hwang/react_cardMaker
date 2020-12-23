class Uploader {
  async upload(file) {
    const url = "https://api.cloudinary.com/v1_1/dcil8rawn/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vnvxzryj");
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return await res.json();
  }
}

export default Uploader;
