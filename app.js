const fileInput = document.getElementById("file");
const previewContainer = document.getElementById("previewContainer");
const titleInput = document.querySelector(".title");
const descriptionInput = document.querySelector("textarea");
const form = document.querySelector("form");
const button = document.querySelector(".button");

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const fileType = file.type.split("/")[0];
  const objectUrl = URL.createObjectURL(file);

  switch (fileType) {
    case "image":
      previewContainer.innerHTML = `<img src="${objectUrl}" class='h-52 w-52 object-contain'/>`;
      break;
    case "video":
      previewContainer.innerHTML = `<video src="${objectUrl}" class='h-52 w-52' controls />`;
      break;
    case "audio":
      previewContainer.innerHTML = `<audio src="${objectUrl}" controls />`;
      break;

    default:
      previewContainer.innerHTML = `<a href="${objectUrl}" target="_blank">${file.name}</a>`;
      break;
  }
});
button.addEventListener('click', async () => {
    const titleValue = titleInput.value.trim();
    const descriptionValue = descriptionInput.value.trim();
    const formData = new FormData();
    formData.append('title', titleValue);
    formData.append('description', descriptionValue);
    formData.append('file', fileInput.files[0]);
  
    try {
      const response = await fetch(URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formData
      });
      const data = await response.json();
      localStorage.setItem('data', JSON.stringify(data));
      window.location.href = './review1.html';
    } catch (error) {
      console.error(error);
    }
  });
  