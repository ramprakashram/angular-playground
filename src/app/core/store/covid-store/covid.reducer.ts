import { createReducer, on } from '@ngrx/store';
import { Country, Global, CovidModel } from '../../../models/covid-model';
import { setCovidStats } from './covid.actions';

export interface CovidReducerState {
    global: Global;
    countryList: Array<Country>
}

export const INITIAL_STATE: CovidReducerState = {
    global: new Global(),
    countryList: []
}

export const covidReducer = createReducer(INITIAL_STATE,
    on(setCovidStats, (state, { covidStatSummary }) => {
        return {
            ...state,
            global: covidStatSummary.Global,
            countryList: covidStatSummary.Countries
        }
    })
)