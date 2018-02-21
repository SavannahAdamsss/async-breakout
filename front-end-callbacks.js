// $.get('https://omdb-api.now.sh/?s=star%20wars', function(result) {
//   const firstMovie = result.Search[0];
//   $.get('https://omdb-api.now.sh/?i=' + firstMovie.imdbid, function(result) {
//     $.get('https://omdb-api.now.sh/?i=' + firstMovie.imdbid, function(result) {
//       $.get('https://omdb-api.now.sh/?i=' + firstMovie.imdbid, function(result) {
//         $.get('https://omdb-api.now.sh/?i=' + firstMovie.imdbid, function(result) {
//           $.get('https://omdb-api.now.sh/?i=' + firstMovie.imdbid, function(result) {
//             $.get('https://omdb-api.now.sh/?i=' + firstMovie.imdbid, function(result) {
//               console.log(result);
//             });
//           });
//         });
//       });
//     });
//   });
// });


$.get('https://omdb-api.now.sh/?s=star%20wars')
  .then(function(result) {
    return result.Search[0];
  }).then(function(firstMovie) {
    return $.get('https://omdb-api.now.sh/?i=' + firstMovie.imdbid);
  }).then(function(movieData) {
    console.log(movieData);
  }).catch(function(error) {
    console.log(error);
  });

(async function() {
  try {
    const result = await $.get('https://omdb-api.now.sh/?s=star%20wars');
    const firstMovie = result.Search[0];
    const movieData = await $.get('https://omdb-api.now.sh/?i=' + firstMovie.imdbid)
    console.log(movieData);
  } catch (error) {
    console.log(error);
  }
})();
