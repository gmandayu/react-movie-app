import { FaPlay, FaPlus } from "react-icons/fa";
import "./featured.scss";

export default ({ item }) => {
	console.log(item);
	let firstDate = new Date(item.first_air_date);
	let genres = [];
	for (let i in item.genres) {
		genres.push(item.genres[i].name);
	}

	return (
		<section
			className="featured"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
			}}>
			<div className="featured__Vertical">
				<div className="featured__Horizontal">
					<div className="featured__Name">{item.original_name}</div>

					<div className="featured__Info">
						<div className="featured__Points">{item.vote_average} points</div>
						<div className="featured__Year">{firstDate.getFullYear()}</div>
						<div className="featured__Seasons">
							{item.number_of_seasons} Season{item.number_of_seasons !== 1 ? "s" : ""}
						</div>
					</div>

					<div className="featured__Description">{item.overview}</div>
					<div className="featured__Buttons">
						<a href="/watch/${item.id}" className="featured__WatchButton">
							<FaPlay size={13} /> Watch{"    "}
						</a>
						<a href="/list/add/${item.id}" className="featured__MyListButton">
							<FaPlus size={13} /> Playlist
						</a>
					</div>
					<div className="featured__Genres">
						<strong>Genres:</strong> {genres.join(", ")}
					</div>
				</div>
			</div>
		</section>
	);
};
