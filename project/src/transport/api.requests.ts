import { axiosApi } from '../store';
import { Movie } from '../types/main-page.types';
import { Review } from '../types/review.types';
import { ApiMethods } from '../const/apiMethods';

export const getMovie = async (movieId: number) => await axiosApi.get<Movie>(`${ApiMethods.Films}/${movieId}`);

export const getSimilarMovies = async (movieId: number) => await axiosApi.get<Movie[]>(`${ApiMethods.Films}/${movieId}/similar`);

export const getMovieReviews = async (movieId: number) => await axiosApi.get<Review[]>(`${ApiMethods.Comments}/${movieId}`);

export const postMovieReview = async (movieId: number, review: { comment: string; rating: number }) =>
  await axiosApi.post<Review[]>(`${ApiMethods.Comments}/${movieId}`, {...review});
