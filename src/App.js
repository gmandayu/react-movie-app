import { useEffect, useState } from "react";
import Featured from "./components/Featured/Featured";
import MovieRow from "./components/MovieRow/MovieRow";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import FetchApi from "./services/api/FetchApi.jsx";
import "./App.scss";

export default () => {
	const [blackHeader, setBlackHeader] = useState(false);
	const [featuredData, setFeaturedData] = useState(null);
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const loadAll = async () => {
			let list = await FetchApi.getHomeList();
			console.log(list);
			setMovieList(list);

			let originals = list.filter((i) => i.slug === "originals");
			let randoms = Math.floor(Math.random() * (originals[0].items.results.length - 1));
			let choosen = originals[0].items.results[randoms];
			let choosenInfo = await FetchApi.getMovieInfo(choosen.id, "tv");

			setFeaturedData(choosenInfo);

			console.log(choosenInfo);
		};

		loadAll();
	}, []);

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 10) {
				setBlackHeader(true);
			} else {
				setBlackHeader(false);
			}
		};
		window.addEventListener("scroll", scrollListener);
		return () => {
			window.removeEventListener("scroll", scrollListener);
		};
	}, []);

	return (
		<div className="App">
			<NavigationBar black={blackHeader} />
			{featuredData && <Featured item={featuredData} />}
			<section className="lists">
				{movieList.map((item, key) => (
					<MovieRow key={key} title={item.title} items={item.items} />
				))}
			</section>
			{movieList.length <= 0 && (
				<div className="loading">
					<img
						src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
						alt="Carregando"
						size={13}></img>
				</div>
			)}
		</div>
	);
};
