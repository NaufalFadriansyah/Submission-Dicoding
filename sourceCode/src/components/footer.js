class Footer extends HTMLElement {
    connectedCallback() {
        this.render()
    }


    render() {
        this.innerHTML = `<footer class="site-footer mt-3">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p class="text-justify">This site was created using a webpack environment, Styling on this website
                        uses the bootstrap framework and also Jquery.
                        <br>
                        The API used was taken from the <a href="https://www.themoviedb.org/documentation/api">Tmdb
                            website</a></p>
                </div>
            </div>
            <hr>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                        <a href="#">Scanfcode</a>.
                    </p>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="social-icons">
                        <li><a class="facebook"
                                href="https://www.youtube.com/channel/UCUc8E9OkJoXFV_rn180OMkQ?view_as=subscriber"><i
                                    class="fa fa-youtube"></i></a></li>
                        <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a class="dribbble" href="https://www.instagram.com/naufall.fdr/"><i
                                    class="fa fa-instagram"></i></a></li>
                        <li><a class="linkedin" href="https://github.com/CodeAndTech"><i class="fa fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
`
    }
}

customElements.define('footer-end', Footer)