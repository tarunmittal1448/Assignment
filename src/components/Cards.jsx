import LightGallery from 'lightgallery/react';
import '../styles/Cards.css';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Cards() {
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
                <a href="https://i0.wp.com/www.happybirthdaywishes-images.com/wp-content/uploads/2015/07/happy-birthday-card-images-pictures.jpg">
                    <img alt="img1" src="https://i0.wp.com/www.happybirthdaywishes-images.com/wp-content/uploads/2015/07/happy-birthday-card-images-pictures.jpg" />
                </a>
                <a href="https://th.bing.com/th/id/R.e30f10a4f5e075e6e6d6087336107141?rik=bxrgX1jUnV%2f8YQ&riu=http%3a%2f%2fwebneel.com%2fdaily%2fsites%2fdefault%2ffiles%2fimages%2fdaily%2f07-2015%2f7-birthday-greetings-card-design-cake.jpg&ehk=A29LbK9WscuAbhuj9I5XAxFGK7warcBm7GWobSTwzb8%3d&risl=&pid=ImgRaw&r=0">
                    <img alt="img2" src="https://th.bing.com/th/id/R.e30f10a4f5e075e6e6d6087336107141?rik=bxrgX1jUnV%2f8YQ&riu=http%3a%2f%2fwebneel.com%2fdaily%2fsites%2fdefault%2ffiles%2fimages%2fdaily%2f07-2015%2f7-birthday-greetings-card-design-cake.jpg&ehk=A29LbK9WscuAbhuj9I5XAxFGK7warcBm7GWobSTwzb8%3d&risl=&pid=ImgRaw&r=0" />
                </a>
                <a href="https://birthdaycake24.com/uploads/worigin/2021/06/26/happy-birthday-wishes-card-for-my-best-friends_60ec4.jpg">
                    <img alt="img2" src="https://birthdaycake24.com/uploads/worigin/2021/06/26/happy-birthday-wishes-card-for-my-best-friends_60ec4.jpg" />
                </a>
                <a href="https://gallery.yopriceville.com/var/albums/Happy-Birthday-Greeting-Cards/Happy_Birthday_Greeting_Card.jpg?m=1493956640">
                    <img alt="img2" src="https://gallery.yopriceville.com/var/albums/Happy-Birthday-Greeting-Cards/Happy_Birthday_Greeting_Card.jpg?m=1493956640" />
                </a>
                <a href="https://hpbd.name/uploads/worigin/2021/03/20/happy-birthday-with-name_d9a0d.jpg">
                    <img alt="img2" src="https://hpbd.name/uploads/worigin/2021/03/20/happy-birthday-with-name_d9a0d.jpg" />
                </a>
                <a href="https://rightquotes4all.com/wp-content/uploads/2020/08/Free-Birthday-Cards-1536x1138.jpg">
                    <img alt="img2" src="https://rightquotes4all.com/wp-content/uploads/2020/08/Free-Birthday-Cards-1536x1138.jpg" />
                </a>
                
                <a href="https://i0.wp.com/www.happybirthdaywishes-images.com/wp-content/uploads/2015/07/happy-birthday-card-images-pictures.jpg">
                    <img alt="img1" src="https://i0.wp.com/www.happybirthdaywishes-images.com/wp-content/uploads/2015/07/happy-birthday-card-images-pictures.jpg" />
                </a>
                <a href="https://th.bing.com/th/id/R.e30f10a4f5e075e6e6d6087336107141?rik=bxrgX1jUnV%2f8YQ&riu=http%3a%2f%2fwebneel.com%2fdaily%2fsites%2fdefault%2ffiles%2fimages%2fdaily%2f07-2015%2f7-birthday-greetings-card-design-cake.jpg&ehk=A29LbK9WscuAbhuj9I5XAxFGK7warcBm7GWobSTwzb8%3d&risl=&pid=ImgRaw&r=0">
                    <img alt="img2" src="https://th.bing.com/th/id/R.e30f10a4f5e075e6e6d6087336107141?rik=bxrgX1jUnV%2f8YQ&riu=http%3a%2f%2fwebneel.com%2fdaily%2fsites%2fdefault%2ffiles%2fimages%2fdaily%2f07-2015%2f7-birthday-greetings-card-design-cake.jpg&ehk=A29LbK9WscuAbhuj9I5XAxFGK7warcBm7GWobSTwzb8%3d&risl=&pid=ImgRaw&r=0" />
                </a>
                <a href="https://birthdaycake24.com/uploads/worigin/2021/06/26/happy-birthday-wishes-card-for-my-best-friends_60ec4.jpg">
                    <img alt="img2" src="https://birthdaycake24.com/uploads/worigin/2021/06/26/happy-birthday-wishes-card-for-my-best-friends_60ec4.jpg" />
                </a>
                <a href="https://gallery.yopriceville.com/var/albums/Happy-Birthday-Greeting-Cards/Happy_Birthday_Greeting_Card.jpg?m=1493956640">
                    <img alt="img2" src="https://gallery.yopriceville.com/var/albums/Happy-Birthday-Greeting-Cards/Happy_Birthday_Greeting_Card.jpg?m=1493956640" />
                </a>
                <a href="https://hpbd.name/uploads/worigin/2021/03/20/happy-birthday-with-name_d9a0d.jpg">
                    <img alt="img2" src="https://hpbd.name/uploads/worigin/2021/03/20/happy-birthday-with-name_d9a0d.jpg" />
                </a>
                <a href="https://rightquotes4all.com/wp-content/uploads/2020/08/Free-Birthday-Cards-1536x1138.jpg">
                    <img alt="img2" src="https://rightquotes4all.com/wp-content/uploads/2020/08/Free-Birthday-Cards-1536x1138.jpg" />
                </a>
                
                ...
            </LightGallery>
        </div>
    );
}

export default Cards;