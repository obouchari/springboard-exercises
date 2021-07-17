/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default image if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
  // TODO: Make an ajax request to the searchShows api.
  const shows = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${query}`
  );

  return shows.data.map((show) => {
    const {
      show: { id, name, summary, image },
    } = show;

    return {
      id,
      name,
      summary,
      image: image === null ? "/movie.png" : image.medium,
    };
  });
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src="${show.image}" alt="${show.name}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button href="#" class="btn btn-primary">Episodes</button>
           </div>
         </div>
       </div>
      `
    );

    $showsList.append($item);
  }
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});

$("#shows-list").on("click", "button", async function handleShowEpisodes(evt) {
  const showId = $(this).parents(".Show").data("show-id");
  const episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  const episodes = await axios.get(
    `http://api.tvmaze.com/shows/${id}/episodes`
  );

  return episodes.data.map((episode) => {
    const { id, name, season, number } = episode;

    return {
      id,
      name,
      season,
      number,
    };
  });
}

/** Populate episodes list:
 *     - given list of episodes, add episodes to DOM
 */

function populateEpisodes(episodes) {
  const $episodesList = $("#episodes-list");
  $episodesList.empty();

  for (let episode of episodes) {
    let $item = $(
      `<li>${episode.name} (Season: ${episode.season}, Episode: ${episode.number})</li>`
    );

    $episodesList.append($item);
  }

  $("#episodes-area").show();
}
