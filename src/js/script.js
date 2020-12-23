"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const quest = prompt ('Один из последних просмотренных фильмов?',''),
         rating = prompt ('На сколько оцените его?','');

    if (quest != null && rating != null && quest != '' && rating != '' && quest.length < 50) {
        personalMovieDB.movies[quest] = rating;
        console.log('done');
    } else {
        i--;
        console.log('error');
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}


console.log(personalMovieDB);