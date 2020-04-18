
class Carrousel extends HTMLElement {

    connectedCallback() {
        this.render()
    }


    render() {
        this.innerHTML = `<div id="carouselExampleCaptions" class="carousel slide img" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="http://getwallpapers.com/wallpaper/full/e/5/9/1110336-widescreen-the-avenger-wallpaper-hd-1920x1080.jpg"
                    class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="http://getwallpapers.com/wallpaper/full/7/0/6/15739.jpg" class="d-block w-100" alt="...">
                </div>
                    <div class="carousel-item">
                        <img src="http://getwallpapers.com/wallpaper/full/3/1/6/971976-download-deadpool-movie-wallpaper-2880x1800-hd-for-mobile.jpg"
                            class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="https://ibb.co/yswrW8W"><img src="https://i.ibb.co/dKdRGQG/Netfilix-logo.png"
                    class="d-block w-100" alt="...">
        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
        </div>`
    }
}

customElements.define('back-drop', Carrousel)