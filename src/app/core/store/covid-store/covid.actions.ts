import { createAction, props } from "@ngrx/store";
import { CovidModel } from "../../../models/covid-model";

export const setCovidStats = createAction('[Covid Stats] Set Covid Data to Store', props<{ covidStatSummary: CovidModel}>());