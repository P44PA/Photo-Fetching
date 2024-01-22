
//add fetch()
document.addEventListener('DOMContentLoaded', function() {
    const photoContainer = document.getElementById('photoContainer');
    const generateBtn = document.getElementById('generateBtn');
    const morePhotosBtn = document.getElementById('MorePhotos');
    const grayscaleToggle = document.getElementById('grayscaleToggle');

    generateBtn.addEventListener('click', function() {
        refreshPhotos();
    });

    morePhotosBtn.addEventListener('click', function() {
        MorePhotos();
    });

    grayscaleToggle.addEventListener('change', function() {
        const images = photoContainer.querySelectorAll('img'); 
        images.forEach((image) => {
            if (grayscaleToggle.checked) {
                applyGrayscale(image);
            } else {
                removeGrayscale(image);
            }
        });
    });

    function refreshPhotos() {
       
        const images = photoContainer.querySelectorAll('.photo-item img');
        images.forEach((image) => {
            const randomImageId = Math.floor(Math.random() * 1000) + 1;
            const imageUrl = `https://picsum.photos/id/${randomImageId}/375/375`;
            image.src = imageUrl;
        });
    }

    function MorePhotos() {
        for (let i = 0; i < 4; i++) {
            const randomImageId = Math.floor(Math.random() * 1000) + 1;
            const imageUrl = `https://picsum.photos/id/${randomImageId}/375/375`;

            const newImage = document.createElement('img');
            newImage.src = imageUrl;
            newImage.alt = 'Failed Connecting to API';

            const newPhoto = document.createElement('div');
            newPhoto.classList.add('photo-item');
            newPhoto.appendChild(newImage);

            OverlayAndText(newPhoto);

            photoContainer.appendChild(newPhoto);
        }
    }

    function applyGrayscale(image) {
        image.style.filter = 'grayscale(100%)';
    }

    function removeGrayscale(image) {
        image.style.filter = 'none';
    }

    function OverlayAndText(photoItem) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const textOverlay = document.createElement('div');
        textOverlay.classList.add('text-overlay');

        const text = document.createElement('p');
        text.innerHTML = 'LUKAS BUDIMAIER <br> https://unsplash.com/photos/pwaaqfoMib';

        text.style.whiteSpace = 'nowrap';
        text.style.color = 'white';
        text.style.fontSize = '13px';
        text.style.position = 'absolute';
        text.style.overflow = 'hidden';
        text.style.bottom = '12%';
        text.style.marginLeft = '5%';
        
       
        
        textOverlay.appendChild(text);
        overlay.appendChild(textOverlay);

        photoItem.appendChild(overlay);
    }
    // function updateTextOverlay(photoItem) {
    //     const textOverlay = photoItem.querySelector('.text p');
    //     textOverlay.innerHTML = 'LUKAS BUDIMAIER <br> https://unsplash.com/photos/pwaaqfoMib';
    // }

    
});

// document.addEventListener('DOMContentLoaded', function() {
//     const randomPicture1 = document.getElementById('random-picture1');
//     const randomPicture2 = document.getElementById('random-picture2');
//     const randomPicture3 = document.getElementById('random-picture3');
//     const randomPicture4 = document.getElementById('random-picture4');
//     const generateBtn = document.getElementById('generateBtn');

//     generateBtn.addEventListener('click', function() {
//         // Using the Lorem Picsum API to generate random pictures
//         const randomImageId1 = Math.floor(Math.random() * 1000) + 1;
//         const randomImageId2 = Math.floor(Math.random() * 1000) + 1;
//         const randomImageId3 = Math.floor(Math.random() * 1000) + 1;
//         const randomImageId4 = Math.floor(Math.random() * 1000) + 1;

//         const imageUrl1 = `https://picsum.photos/id/${randomImageId1}/375/375`;
//         const imageUrl2 = `https://picsum.photos/id/${randomImageId2}/375/375`;
//         const imageUrl3 = `https://picsum.photos/id/${randomImageId3}/375/375`;
//         const imageUrl4 = `https://picsum.photos/id/${randomImageId4}/375/375`;

//         randomPicture1.src = imageUrl1;
//         randomPicture2.src = imageUrl2;
//         randomPicture3.src = imageUrl3;
//         randomPicture4.src = imageUrl4;
//     });
//     grayscaleToggle.addEventListener('change', function() {
//         if (grayscaleToggle.checked) {
//             applyGrayscale(randomPicture1);
//             applyGrayscale(randomPicture2);
//             applyGrayscale(randomPicture3);
//             applyGrayscale(randomPicture4);
//         } else {
//             removeGrayscale(randomPicture1);
//             removeGrayscale(randomPicture2);
//             removeGrayscale(randomPicture3);
//             removeGrayscale(randomPicture4);
//         }
//     });

//     function applyGrayscale(image) {
//         image.style.filter = 'grayscale(100%)';
//     }

//     function removeGrayscale(image) {
//         image.style.filter = 'none';
//     }
// });

