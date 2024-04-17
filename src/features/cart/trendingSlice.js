import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    trendingMovies: [],
    trendingTv: [],
    topMovieList:[],
    amount: 4,
    total: 0,
    isLoading: true,
  };

  const movieurl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const tvurl = 'https://api.themoviedb.org/3/discover/tv?air_date.gte=&air_date.lte=2024-10-17&certification=&certification_country=GB&debug=&first_air_date.gte=&first_air_date.lte=&page=1&primary_release_date.gte=&primary_release_date.lte=&region=GB%7CIE%7CXX&release_date.gte=&release_date.lte=&show_me=0&sort_by=popularity.desc&vote_average.gte=0&vote_average.lte=10&vote_count.gte=0&watch_region=GB&with_genres=&with_keywords=&with_networks=&with_origin_country=&with_original_language=&with_watch_monetization_types=flatrate%7Cfree%7Crent%7Cbuy&with_watch_providers=&with_release_type=&with_runtime.gte=0&with_runtime.lte=400&language=en-GB';
  const toprated = 'https://api.themoviedb.org/3/discover/movie?air_date.gte=&air_date.lte=&certification=&certification_country=GB&debug=&first_air_date.gte=&first_air_date.lte=&page=1&primary_release_date.gte=&primary_release_date.lte=&region=&release_date.gte=&release_date.lte=2024-10-17&show_me=0&sort_by=vote_average.desc&vote_average.gte=0&vote_average.lte=10&vote_count.gte=300&watch_region=GB&with_genres=&with_keywords=&with_networks=&with_origin_country=&with_original_language=&with_watch_monetization_types=flatrate%7Cfree%7Cads%7Crent%7Cbuy&with_watch_providers=&with_release_type=&with_runtime.gte=0&with_runtime.lte=400';

  export const getMovieList = createAsyncThunk(
    'cart/getMovieList',
    async (name, thunkAPI) => {
      try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const resp = await axios.get(movieurl,{
            headers:{
                'Authorization' :'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzgxZjU5Njk0YzlkZGVjYTUwNWI0YzBlY2E3OTA2MSIsInN1YiI6IjYxZmJmN2YyZGZhYWU5MDAxZGJiOTMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XElCQQeUP4VTBBaj1d5ORlKGnWSmka0ToADafd1-S6A'
            }
        });
  
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );


  export const getTvList = createAsyncThunk(
    'cart/getTvList',
    async (name, thunkAPI) => {
      try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const resp = await axios.get(tvurl,{
            headers:{
                'Authorization' :'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzgxZjU5Njk0YzlkZGVjYTUwNWI0YzBlY2E3OTA2MSIsInN1YiI6IjYxZmJmN2YyZGZhYWU5MDAxZGJiOTMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XElCQQeUP4VTBBaj1d5ORlKGnWSmka0ToADafd1-S6A'
            }
        });
  
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );
  export const getTopMovieList = createAsyncThunk(
    'cart/getTopMovieList',
    async (name, thunkAPI) => {
      try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const resp = await axios.get(toprated,{
            headers:{
                'Authorization' :'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzgxZjU5Njk0YzlkZGVjYTUwNWI0YzBlY2E3OTA2MSIsInN1YiI6IjYxZmJmN2YyZGZhYWU5MDAxZGJiOTMwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XElCQQeUP4VTBBaj1d5ORlKGnWSmka0ToADafd1-S6A'
            }
        });
  
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );

const trendingSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
       
    },
    extraReducers:(builder) =>{
        builder
      .addCase(getMovieList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovieList.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.trendingMovies = action.payload.results;
      })
      .addCase(getMovieList.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })
      .addCase(getTvList.pending,(state)=>{
        state.isLoading = true;
      }).addCase(getTvList.fulfilled,(state, action)=>{
        state.isLoading = false;
        state.trendingTv = action.payload.results;
      }).addCase(getTvList.rejected,(state)=>{
        state.isLoading = false;
      }) .addCase(getTopMovieList.pending,(state)=>{
        state.isLoading = true;
      }).addCase(getTopMovieList.fulfilled,(state, action)=>{
        state.isLoading = false;
        state.topMovieList = action.payload.results;
      }).addCase(getTopMovieList.rejected,(state)=>{
        state.isLoading = false;
      })

    }
   
})

export default trendingSlice.reducer;