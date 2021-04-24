/*
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'selectize',
  templateUrl: '../selectize.component.html',
  styleUrls: ['./selectize.component.css']
})
export class SelectizeComponent implements AfterViewInit {

  @ViewChild('input') input: ElementRef | undefined;
  // @ts-ignore
  public posts$ : string;

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit() {
    // @ts-ignore

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        // @ts-ignore
        map(event => event['target'].value),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(value => this.dataService.getByText({text: value}))
      ).subscribe(results => {
      if (typeof results === "string") {
        this.posts$ = results;
      }
    });
  }
}
*/
