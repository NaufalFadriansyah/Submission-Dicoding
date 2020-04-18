// home
$.ajax({
    url: `https://api.themoviedb.org/3/trending/movie/week?api_key=a021f2cedf34d2c06bbe848815858791`,
    success: results => {
        const movies = results.results
        let cards = ''
        movies.forEach(movie => {
            cards += card(movie)
            $('.card-container').html(cards)
        });

        //button details di klik
        $('.details').on('click', e => {
            reqAjax(e.target)
        })

        //button details di klik
        $('.trailer').on('click', e => {
            reqTrailer(e.target)
        })
    },
    error: e => {
        console.log('movie not found')
    }
})


// search button
$('.search').on('input', () => {
    $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie?api_key=a021f2cedf34d2c06bbe848815858791&query=' + $('.search').val(),
        success: results => {
            const movies = results.results
            let cards = ''
            movies.forEach(movie => {
                cards += card(movie)

            });
            $('.card-container').html(cards)
            //button details di klik
            $('.details').on('click', e => {
                reqAjax(e.target)
            })
            //button watch di klik
            $('.trailer').on('click', e => {
                reqTrailer(e.target)
            })
        },
        error: e => {
            console.log('movie not found')
        }
    })
    console.log($('.search').val())
})
// Dropdown list
$('.dropdown-menu').on('click', e => {
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${e.target.attributes[1].value}?api_key=a021f2cedf34d2c06bbe848815858791`,
        success: results => {
            const movies = results.results
            let cards = ''
            movies.forEach(movie => {
                cards += card(movie)

            });
            $('.card-container').html(cards)

            //button details di klik
            $('.details').on('click', e => {
                reqAjax(e.target)
            })
            //button watch di klik
            $('.trailer').on('click', e => {
                reqTrailer(e.target)
            })

        },
        error: e => {
            console.log('movie not found')
        }

    })
    console.log(e.target.attributes[1].value)
})







// request movie details
function reqAjax(target) {
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${$(target).data('id')}?api_key=a021f2cedf34d2c06bbe848815858791`,
        success: movDetails => {
            const movie = showMovieDetails(movDetails)
            $('.modal-body').html(movie)
        }
    })
}
// request movie trailer
function reqTrailer(target) {
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${$(target).data('id')}/videos?api_key=a021f2cedf34d2c06bbe848815858791`,
        success: movTrailer => {
            const keyTrailer = movTrailer.results[0].key
            const showTrailer = setTrailer(keyTrailer)
            $('.modal-youtube').html(showTrailer)

        }
    })
}


// card
function card(movie) {
    const img = 'https://image.tmdb.org/t/p/w500'
    return ` <div class="col-md-3 mt-4">
    <div class="card navbar" style="width: 18rem;">
        <img src="${img}${movie.poster_path}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-white">${movie.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted mt-2"><i class="fas fa-star">${movie.vote_average}</i></h6>
            <h6 class="card-subtitle mb-2 text-muted mt-2"><i class="fas fa-calendar"></i> Release date: </i>${movie.release_date}</h6>
            <a href="#" class="btn btn-dark details mr-3" data-toggle="modal" data-target="#exampleModal" data-id="${movie.id}">Details</a>
            <a href="#" class="btn btn-light trailer" data-toggle="modal" data-target="#youtube" data-id="${movie.id}">Watch</a>
        </div>
    </div>
</div>`
}

// modal details
function showMovieDetails(movDetails) {
    const img = 'https://image.tmdb.org/t/p/w500'
    const genre = movDetails.genres[1].name

    return `<div class="container-fluid">
    <div class="row">
        <div class="col">
            <img src="${img}${movDetails.poster_path}" class="img-fluid">
        </div>
        <div class="col">
            <ul class="list-group">
                <li class="list-group-item"><h5>${movDetails.title}</h5></li>
                <li class="list-group-item"><strong>Status : </strong>${movDetails.status}</li>
                <li class="list-group-item"><strong>Runtime : </strong>${movDetails.runtime} minute</li>
                <li class="list-group-item"><strong>Genre : </strong>${genre}</li>
                <li class="list-group-item"><strong>Tagline: </strong>${movDetails.tagline}</li>
                <li class="list-group-item"><strong>Plot : </strong>${movDetails.overview}</li>
            </ul>
        </div>
    </div>
</div>`
}
// modal Trailer
function setTrailer(keyTrailer) {
    const key = keyTrailer
    return `
    <div class="container-fluid ml-4 mt-3">
        <div class="row jusify-content-center">
            <div class="col">
            <iframe width="420" height="315 "
            src="https://www.youtube.com/embed/${key}">
            </iframe>
            </div>
        </div>
    </div>
    `
}