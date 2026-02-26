import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(
    {
        name:'movies',
        initialState:{
            nowPlayingMovies: null,
            trailerId: null,
            popularMovie: null, 
            topRatedMovie:null,       
        },
        reducers:{
            addNowPlayingMovies:(state, action)=>{
                state.nowPlayingMovies = action.payload;
            },
            addPopularMovie:(state, action)=>{
                state.popularMovie = action.payload;
            },
            addTrailerId : (state, action) => {
                state.trailerId = action.payload;
            },
            addTopRatedMovie:(state, action)=>{
                state.topRatedMovie = action.payload;
            },
        },
});

export const{addNowPlayingMovies,addTrailerId, addPopularMovie, addTopRatedMovie} = movieSlice.actions;

export default movieSlice.reducer;