const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');

fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];
    const fileType = file.type.split('/')[0];
    const objectUrl = URL.createObjectURL(file);

    switch (fileType) {
        case 'image':
            previewContainer.innerHTML = `<img src="${objectUrl}" class="h-10 w-10"/>`;
            break;
        case 'video':
            previewContainer.innerHTML = `<video src="${objectUrl}" class="h-10 w-10" controls />`;
            break;
        case 'audio':
            previewContainer.innerHTML = `<audio src="${objectUrl}" class="h-10 w-10" controls />`;
            break;
        default:
            previewContainer.innerHTML = `<a href="${objectUrl}" target="_blank">${file.name}</a>`;
            break;
    }
});