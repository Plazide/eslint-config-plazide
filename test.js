const moment = require("moment");
const arraySort = require("array-sort");

const movies = [];

class Movie{
	constructor(title, release, rating, actors){
		this.title = title;
		this.release = release;
		this.rating = rating;
		this.actors = actors;
	}

	// Get description of movie.
	getDescription(locale){
		if(!locale)
			locale = "en";

		const date = moment(this.release).locale(locale).format("MMMM Do YYYY");
		const desc = `${this.title} was released on ${date} and has a rating of ${this.rating}`;

		return desc;
	}

	// Get the time since release.
	getTimeSinceRelease(locale){
		if(!locale)
			locale = "en";

		const start = new Date(this.release).getTime();
		const now = Date.now();
		const diff = now - start;
		const result = moment.duration(diff).locale(locale).humanize();

		return result;
	}

	// Get the combined age of the cast.
	getTotalCastAge(){
		let totalAge = 0;

		for(let actor of this.actors)
			totalAge += actor.age;

		return totalAge;
	}

	// Get the average age of the cast.
	getAverageCastAge(){
		let totalAge = this.getTotalCastAge();

		const averageAge = totalAge / this.actors.length;

		return averageAge;
	}

	getMedianCastAge(){
		const actors = arraySort(this.actors, "age");
		console.log(actors);

		let index = Math.floor(actors.length / 2),
			median = 0;

		if(isEven(actors.length)){
			let index1 = index - 1,
				index2 = index;

			median = (actors[index1].age + actors[index2].age) / 2;
		}else {
			median = actors[index].age;
		}

		return median;
	}
}

function isEven(n){
	return n % 2 === 0;
}

function createMovie(){
	const title = "The Broomstick";
	const year = new Date("2017-02-10");
	const rating = 7.4;
	const actors = [
		{
			"name": "Andy Candy",
			"gender": "Male",
			"age": 40
		},
		{
			"name": "Brandon Cook",
			"gender": "Male",
			"age": 28
		},
		{
			"name": "John Makingtire",
			"gender": "Male",
			"age": 34
		},
		{
			"name": "Nora Horan",
			"gender": "Female",
			"age": 43
		},
		{
			"name": "Jake Andersson",
			"gender": "Male",
			"age": 5
		},
		{
			"name": "Jake Andersson",
			"gender": "Male",
			"age": 5
		}
	];

	const movie = new Movie(title, year, rating, actors);
	movies.push(movie);
	return null;
}

function getMoviesInfo(){
	for(let movie of movies){
		const time = movie.getTimeSinceRelease("sv");
		const desc = movie.getDescription("sv");
		const median = movie.getMedianCastAge();
		const avgAge = movie.getAverageCastAge();
		const totalAge = movie.getTotalCastAge();

		console.log(desc);
		console.log(time);
		console.log("Median age:", median);
		console.log("Average Age:", avgAge);
		console.log("Total Age", totalAge);
	}

	return null;
}

createMovie();
getMoviesInfo();
