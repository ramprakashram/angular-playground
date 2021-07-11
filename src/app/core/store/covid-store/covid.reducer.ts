import { createReducer, on } from '@ngrx/store';
import { Country, Global, CovidModel } from '../../../models/covid-model';
import { setCovidStats, setSelectedCountry, updateCountryPinnedStatus } from './covid.actions';

export interface CovidReducerState {
    global: Global;
    countryList: Array<Country>;
    selectedCountry: Country;
}

export const INITIAL_STATE: CovidReducerState = {
    global: new Global(),
    countryList: [],
    selectedCountry: null
}

export const covidReducer = createReducer(INITIAL_STATE,
    on(setCovidStats, (state, { covidStatSummary }) => {
        return {
            ...state,
            global: covidStatSummary.Global,
            countryList: covidStatSummary.Countries
        }
    }),
    on(setSelectedCountry, (state, { selectedCountry }) => {
        return {
            ...state,
            selectedCountry
        }
    }),
    on(updateCountryPinnedStatus, (state, { status, countryId }) => {
        if (countryId) {

            return {
                ...state,
                countryList: state.countryList.map((eachCountry) => {
                    if (eachCountry.ID === countryId) {
                        return {
                            ...eachCountry,
                            isPinned: status
                        }
                    } else {
                        return eachCountry
                    }
                })
            }
        } else {
            return state;
        }
    })
)