import LightGallery from 'lightgallery/react';
import '../styles/Gallery.css';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="https://th.bing.com/th/id/OIP.BMzBM_-rMoBo58OSntlAfgHaE8?rs=1&pid=ImgDetMain">
                    <img alt="img1" src="https://th.bing.com/th/id/OIP.BMzBM_-rMoBo58OSntlAfgHaE8?rs=1&pid=ImgDetMain" />
                </a>
                <a href="https://www.wallpaperflare.com/static/318/13/255/nature-dark-clouds-wallpaper.jpg">
                    <img alt="img2" src="https://www.wallpaperflare.com/static/318/13/255/nature-dark-clouds-wallpaper.jpg" />
                </a>
                <a href="https://th.bing.com/th/id/OIP.luFcH_Ww4c0qp_QM3EkSWwHaEo?rs=1&pid=ImgDetMain">
                    <img alt="img2" src="https://th.bing.com/th/id/OIP.luFcH_Ww4c0qp_QM3EkSWwHaEo?rs=1&pid=ImgDetMain" />
                </a>
                <a href="https://wallpaperaccess.com/full/1970371.jpg">
                    <img alt="img2" src="https://wallpaperaccess.com/full/1970371.jpg" />
                </a>
                <a href="https://wallpapercave.com/wp/bmdgj2I.jpg">
                    <img alt="img2" src="https://wallpapercave.com/wp/bmdgj2I.jpg" />
                </a>
                <a href="https://wallpaperaccess.com/full/3956803.jpg">
                    <img alt="img2" src="https://wallpaperaccess.com/full/3956803.jpg" />
                </a>
                <a href="https://th.bing.com/th/id/OIP.BMzBM_-rMoBo58OSntlAfgHaE8?rs=1&pid=ImgDetMain">
                    <img alt="img1" src="https://th.bing.com/th/id/OIP.BMzBM_-rMoBo58OSntlAfgHaE8?rs=1&pid=ImgDetMain" />
                </a>
                <a href="https://www.wallpaperflare.com/static/318/13/255/nature-dark-clouds-wallpaper.jpg">
                    <img alt="img2" src="https://www.wallpaperflare.com/static/318/13/255/nature-dark-clouds-wallpaper.jpg" />
                </a>
                <a href="https://th.bing.com/th/id/OIP.luFcH_Ww4c0qp_QM3EkSWwHaEo?rs=1&pid=ImgDetMain">
                    <img alt="img2" src="https://th.bing.com/th/id/OIP.luFcH_Ww4c0qp_QM3EkSWwHaEo?rs=1&pid=ImgDetMain" />
                </a>
                <a href="https://wallpaperaccess.com/full/1970371.jpg">
                    <img alt="img2" src="https://wallpaperaccess.com/full/1970371.jpg" />
                </a>
                <a href="https://wallpapercave.com/wp/bmdgj2I.jpg">
                    <img alt="img2" src="https://wallpapercave.com/wp/bmdgj2I.jpg" />
                </a>
                <a href="https://wallpaperaccess.com/full/3956803.jpg">
                    <img alt="img2" src="https://wallpaperaccess.com/full/3956803.jpg" />
                </a>
                ...
            </LightGallery>
        </div>
    );
}

export default Gallery;