const api_key = "62fa8556b958f218947e80071381db05";
const api_base = "https://api.themoviedb.org/3";

const fetchingAPI = async (endpoint) => {
	const req = await fetch(`${api_base}${endpoint}`);
	const json = await req.json();

	return json;
};

export default {
	getHomeList: async () => {
		return [
			{
				slug: "originals",
				title: "Originals",
				items: await fetchingAPI(
					`/discover/tv?with_networks=213&language=pt-BR&api_key=${api_key}`,
				),
			},
			{
				slug: "sci-fi",
				title: "Science Fiction",
				items: await fetchingAPI(
					`/discover/movie?with_genres=878&language=pt-BR&api_key=${api_key}`,
				),
			},
			{
				slug: "fantasy",
				title: "Fantasy",
				items: await fetchingAPI(
					`/discover/movie?with_genres=14&language=pt-BR&api_key=${api_key}`,
				),
			},
			{
				slug: "action",
				title: "Action",
				items: await fetchingAPI(
					`/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`,
				),
			},
			{
				slug: "comedy",
				title: "Comedy",
				items: await fetchingAPI(
					`/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`,
				),
			},
			{
				slug: "horror",
				title: "Horror",
				items: await fetchingAPI(
					`/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`,
				),
			},
			{
				slug: "romance",
				title: "Romance",
				items: await fetchingAPI(
					`/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`,
				),
			},
			{
				slug: "documentary",
				title: "Documentary",
				items: await fetchingAPI(
					`/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`,
				),
			},
		];
	},
	getMovieInfo: async (movieId, type) => {
		let info = {};
		if (movieId) {
			switch (type) {
				case "movie":
					info = await fetchingAPI(`/movie/${movieId}?language=pt-BR&api_key=${api_key}`);
					break;
				case "tv":
					info = await fetchingAPI(`/tv/${movieId}?language=pt-BR&api_key=${api_key}`);
					break;
				default:
					info = null;
					break;
			}
		}
		return info;
	},
};
