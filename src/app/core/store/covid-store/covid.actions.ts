import { createAction, props } from "@ngrx/store";
import { Country, CovidModel } from "../../../models/covid-model";

export const setCovidStats = createAction(
    '[Covid Stats] Set Covid Data to Store',
    props<{ covidStatSummary: CovidModel }>()
);

export const setSelectedCountry = createAction(
    '[Covid Stats] Set User selected country',
    props<{ selectedCountry: Country }>()
);

export const updateCountryPinnedStatus = createAction(
    '[Covid Stats] Updates pinned status of country',
    props<{status: boolean, countryId: string}>()
)