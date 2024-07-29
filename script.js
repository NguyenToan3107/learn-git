document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Lưu ảnh chính hiện tại
            let tempSrc = mainImage.src;
            // Đổi ảnh chính thành ảnh phụ được click
            mainImage.src = thumbnail.src;
            // Đổi ảnh phụ thành ảnh chính cũ
            thumbnail.src = tempSrc;
        });
    });
});

document.querySelector('.main').addEventListener('click', (e) => {
    console.log('toan')
})