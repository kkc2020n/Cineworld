import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const detailState = {
    detail: {},
    season:{},
    isLoading: true,
  };



export const getTVDetail = createAsyncThunk(
    'cart/getTVDetail',
    async (payload, thunkAPI) => {
      try {
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const movieurl = `https://api.themoviedb.org/3/tv/${payload.id}?language=en-US`;
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

  export const getSeasonDetail = createAsyncThunk(
    'cart/getSeasonDetail',
    async (payload, thunkAPI) => {
      try {
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const url = `https://api.themoviedb.org/3/tv//${payload.id}/season/1?language=en-US&append_to_response=credits`;
        const resp = await axios.get(url,{
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


  const detailSlice = createSlice({
    name: 'detail',
    initialState:detailState,
    reducers:{
       
    },
    extraReducers:(builder) =>{
        builder
      .addCase(getTVDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTVDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload;
      }).addCase(getTVDetail.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getSeasonDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeasonDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.season = action.payload;
      }).addCase(getSeasonDetail.rejected, (state, action) => {
        state.isLoading = false;
      })
     
    }
   
})

export default detailSlice.reducer;