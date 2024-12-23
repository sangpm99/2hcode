// const arr = [
//     "https://images.merchize.com/PNe0b47U5Lfu1bJ-6AL1utstzYE=/84x106/filters:format(webp):quality(40)/merchize.com/wp-content/uploads/2020/10/all-over-print-t-shirt.jpg",
//     "https://images.merchize.com/diEv8HJkj0riZ2uIgPoyclX5gAA=/84x106/filters:format(webp):quality(40)/merchize.com/wp-content/uploads/2020/10/all-over-print-size-chart-1.png",
//     "https://images.merchize.com/CRCkbCYFbj0b6KUXpMNYmntTVVQ=/84x106/filters:format(webp):quality(80)/img.youtube.com/vi/7wT1VLM9aNE/0.jpg",
//     "https://images.merchize.com/WQSPq38ZRAhEJew0Vu77UzTGi7Q=/84x106/filters:format(webp):quality(40)/merchize.com/wp-content/uploads/2021/07/AOP-T-shirt-3-copy.jpg",
//     "https://images.merchize.com/hGaRm8_yHoQRHz3dXs_8wN143zw=/84x106/filters:format(webp):quality(40)/merchize.com/wp-content/uploads/2020/10/custom-all-over-print-t-shirt.jpg",
//     "https://images.merchize.com/4Oac7kfah4ykVCW2F1HPCbxmD2s=/84x106/filters:format(webp):quality(40)/public-artworks.merchize.com/merchize-website/website-merchize-3908876.4049557657-1687939872061",
//     "https://images.merchize.com/PRnvgyaavKdbnmt-1Creyerfock=/84x106/filters:format(webp):quality(40)/public-artworks.merchize.com/merchize-website/website-merchize-1548603.667199493-1687939888125",
// ];
// const results = []; // Mảng chứa kết quả
// const length = 28;
// // Lặp qua từng phần tử trong mảng arr
// arr.forEach(url => {
//     const newUrl = "https://" + url.slice(length); // Thay thế 28 ký tự đầu bằng "https://"
//     // Kiểm tra nếu chuỗi chứa cụm từ
//     if (newUrl.includes("/merchize.com/wp-content")) {
//         // Cắt chuỗi khi gặp cụm từ
//         const result = newUrl.split('/merchize.com/wp-content')[1];

//         // Nếu có phần còn lại, thêm vào mảng results
//         if (result) {
//             results.push("https://merchize.com/wp-content" + result);
//         }
//     } else if (newUrl.includes("/merchize-website")) {
//         const result = newUrl.split('/merchize-website')[1];
        
//         // Nếu có phần còn lại, thêm vào mảng results
//         if (result) {
//             results.push("https://public-artworks.merchize.com/merchize-website" + result);
//         }
//     }
// });
// console.log(results); // In ra mảng kết quả

// =================================================================================
const arr = [];
const length = 28;
const dataImages = [];
document.getElementById('file').addEventListener('change', handleFile, false);

function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Giả sử bạn muốn đọc dữ liệu từ sheet đầu tiên
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Chuyển đổi sheet thành JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        jsonData.map(row => {
            arr.push(row.Images);
        });

        arr.map(item => {
            const results = [];
            const arrUrl = item.split(",");
            arrUrl.forEach(url => {
                const newUrl = "https://" + url.slice(length); // Thay thế 28 ký tự đầu bằng "https://"

                // Kiểm tra nếu chuỗi chứa cụm từ
                if (newUrl.includes("/merchize.com/wp-content")) {
                    // Cắt chuỗi khi gặp cụm từ
                    const result = newUrl.split('/merchize.com/wp-content')[1];
            
                    // Nếu có phần còn lại, thêm vào mảng results
                    if (result) {
                        results.push("https://merchize.com/wp-content" + result);
                    }
                }
                
                if (newUrl.includes("/public-artworks.merchize.com/merchize-website")) {
                    const result = newUrl.split('/public-artworks.merchize.com/merchize-website')[1];
                    
                    // Nếu có phần còn lại, thêm vào mảng results
                    if (result) {
                        results.push("https://public-artworks.merchize.com/merchize-website" + result);
                    }
                }

                if (newUrl.includes("/website-static.merchize.com/uploads")) {
                    const result = newUrl.split('/website-static.merchize.com/uploads')[1];
                    
                    // Nếu có phần còn lại, thêm vào mảng results
                    if (result) {
                        results.push("https://website-static.merchize.com/uploads" + result);
                    }
                }
            });
            const newUrl2 = results.join(",");
            if(newUrl2.length !== 0) {
                dataImages.push(newUrl2);
            }
        })
    };

    reader.readAsArrayBuffer(file);
}

document.getElementById('exportButton').addEventListener('click', () => {
    const dataExcel = dataImages.map(url => ({ url }));
    const ws = XLSX.utils.json_to_sheet(dataExcel, { header: [] }); // Không có tiêu đề
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Xuất file Excel
    XLSX.writeFile(wb, "urls.xlsx");
});