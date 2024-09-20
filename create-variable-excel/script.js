const lo = ["European", "Australia", "United Kingdom", "United States"];
const co = ['Ash', 'Black', 'Carolina Blue', 'Charcoal', 'Dark Chocolate', 'Dark Heather', 'Forest Green', 'Gold', 'Heliconia', 'Indigo Blue', 'Irish Green', 'Light Blue', 'Light Pink', 'Maroon', 'Navy', 'Orange', 'Purple', 'Red', 'Royal', 'Sport Grey', 'White', 'Sand', 'Antique Cherry Red', 'Heather Grey', 'Kelly Green', 'Bottle Green', 'Fire Red', 'Hot Chocolate', 'Oxford Navy', 'Sun Yellow', 'Arctic White', 'Jet Black', 'Sky Blue', 'Steel Grey'];
const si = ['S','M','L','XL','2XL','3XL','4XL','5XL'];
const st = ['Front','Back','Both Sides','Front Right Sleeve','Back Right Sleeve','Both Sides Right Sleeve','Front Left Sleeve','Back Left Sleeve','Both Sides Left Sleeve','Front Both Sleeves','Back Both Sleeves','Both Sides Both Sleeves'];

const excelData = [];
excelData.push(['Location', 'Color', 'Size', 'Style']);

let count = 0;

for(let a = 0; a < lo.length; a++) {
    for(let b = 0; b < co.length; b++) {
        for(let c = 0; c < si.length; c++) {
            for(let d = 0; d < st.length; d++) {
                excelData.push([lo[a], co[b], si[c], st[d]]);
                count++;
            }
        }
    }
}

console.log(count);

document.getElementById('downloadExcel').addEventListener('click', () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(excelData);

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'data.xlsx');
});