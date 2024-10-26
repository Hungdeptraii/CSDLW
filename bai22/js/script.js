$(document).ready(function() {
    // Hiệu ứng khi di chuột vào navbar items
    $('.nav-item').hover(
        function() {
            $(this).css('background-color', 'white'); // Đổi background khi hover
        }, 
        function() {
            $(this).css('background-color', 'transparent');
        }
    );

});

var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Ví dụ thêm sản phẩm vào Firestore
db.collection("products").add({
    name: "Sản phẩm A",
    price: 100000,
    description: "Mô tả sản phẩm A"
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});


document.addEventListener("DOMContentLoaded", function() {
    // Manually set each link if needed
    document.querySelector('.nav-link[href="/bai22/index.html"]').href = "/bai22/index.html";
    document.querySelector('.nav-link[href="/bai22/blog.html"]').href = "/bai22/blog.html";
    document.querySelector('.nav-link[href="/bai22/cv.html"]').href = "/bai22/cv.html";
    document.querySelector('.nav-link[href="/bai22/products.html"]').href = "/bai22/products.html";
});

