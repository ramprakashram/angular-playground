import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getCovidData, setCovidStats } from './covid.actions';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { CovidService } from '../../../modules/covid-stats/services/covid.service';
import { CovidModel } from '../../../models/covid-model';
import { EmptyError } from 'rxjs';

@Injectable()
export class CovidEffects {

    constructor (private actions$: Actions, private covidService: CovidService) { }

    getCovidSummaryList$ = createEffect(() => this.actions$.pipe(
        ofType(getCovidData),
        mergeMap(() => this.covidService.getCovidSummary()
            .pipe(
                map((covidStatSummary: CovidModel) => setCovidStats({covidStatSummary}))
            )
        )
    ))
}