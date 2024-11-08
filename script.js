// Hàm gọi API
function callAPI(apiUrl) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi kết nối với API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Kết quả từ API:', data);
            alert('API trả về: ' + JSON.stringify(data));
        })
        .catch(error => {
            console.error('Đã xảy ra lỗi:', error);
            alert('Đã xảy ra lỗi khi gọi API.');
        });
}
