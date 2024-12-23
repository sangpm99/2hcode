// Function to check if URL has an image extension and modify if needed
function ensureImageExtension(url) {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

    // Check if URL ends with any valid image extension
    if (!imageExtensions.some(ext => url.endsWith(ext))) {
        // Remove all text after the last dot, then add .jpeg
        const lastSlashIndex = url.lastIndexOf('/');
        const lastDotIndex = url.lastIndexOf('.');
        // If there is a dot after the last slash, remove the text after it and append .jpeg
        if (lastDotIndex > lastSlashIndex) {
            url = url.substring(0, lastDotIndex);
        }
        return url + '.jpeg'; // Append `.jpeg`
    }
    return url; // If it already has a valid extension, return as is
}

// Function to update the displayed URLs
function updateUrlList() {
    const urlInput = document.getElementById('urlInput').value;
    const urlArray = urlInput.split(',').map(url => ensureImageExtension(url.trim())); // Ensure extensions
    const urlListDiv = document.getElementById('urlList');
    
    // Clear the existing list
    urlListDiv.innerHTML = '';

    // Display each URL in the HTML
    urlArray.forEach(function(link) {
        if (link) { // Check if link is not empty
            const para = document.createElement('p');
            para.textContent = link;
            urlListDiv.appendChild(para);
        }
    });
}

// Event listener for input change to update URL list
document.getElementById('urlInput').addEventListener('input', updateUrlList);

// Function to extract file names and copy to clipboard
document.getElementById('copyFileNamesButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const urlArray = urlInput.split(',').map(url => ensureImageExtension(url.trim())); // Ensure extensions

    const fileNames = urlArray.map(link => {
        return link.substring(link.lastIndexOf('/') + 1);
    }).join(',');

    // Copy file names to clipboard
    const textArea = document.createElement('textarea');
    textArea.value = fileNames;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

});

// Function to copy full URLs to clipboard with line breaks
document.getElementById('copyUrlButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const urlArray = urlInput.split(',').map(url => ensureImageExtension(url.trim())); // Ensure extensions

    // Copy full URLs to clipboard with line breaks
    const urlsWithLineBreaks = urlArray.join('\n');
    const textArea = document.createElement('textarea');
    textArea.value = urlsWithLineBreaks; // Join URLs with newline
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

});