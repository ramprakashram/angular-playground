import { createSelector } from "@ngrx/store";
import { Global } from "../../../models/covid-model";
import { AppState } from '../../state/app.state';
import { CovidReducerState } from "./covid.reducer";


export const covidStatSelector = createSelector(
    (state: AppState) => state.covid,
    (covid: CovidReducerState) => covid
)

export const covidGlobalStatSelector = createSelector(
    covidStatSelector,
    (covid: CovidReducerState) => covid.global
)

export const covidCountryListSelector = createSelector(
    covidStatSelector,
    (covid: CovidReducerState) => covid.countryList
)