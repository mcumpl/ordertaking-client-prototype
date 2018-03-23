import { Pipe, PipeTransform } from '@angular/core';
import {
  CountryEnum,
  Format,
  FormatMexico,
  FormatUsa,
  BusinessLineCode,
  FormatEu,
} from '../model/country.enum';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(
    date: any,
    countryCode: CountryEnum | string = CountryEnum.USA,
    dateTimeMode: Format = Format.date,
    businessLine?: string,
  ): any {
    if (countryCode === null) {
      countryCode = CountryEnum.USA;
    }
    let format;
    const country = countryCode.trim().toUpperCase();
    switch (country) {
      case CountryEnum.MEXICO: {
        switch (dateTimeMode) {
          case Format.date: {
            format = FormatMexico.date;
            break;
          }
          case Format.dateTime: {
            format = FormatMexico.dateTime;
            break;
          }
          case Format.time: {
            format = FormatMexico.time;
            break;
          }
        }
        break;
      }
      case CountryEnum.USA: {
        switch (dateTimeMode) {
          case Format.date: {
            format = FormatUsa.date;
            break;
          }
          case Format.dateTime: {
            format = FormatUsa.dateTime;
            break;
          }
          case Format.time: {
            format = FormatUsa.time;
            break;
          }
        }
        break;
      }
      case CountryEnum.GREATBRITAIN: {
        switch (dateTimeMode) {
          case Format.date: {
            format = FormatEu.date;
            break;
          }
          case Format.dateTime: {
            format = FormatEu.dateTime;
            break;
          }
          case Format.time: {
            format = FormatEu.time;
            break;
          }
        }
        break;
      }
      default: {
        switch (dateTimeMode) {
          case Format.date: {
            format = FormatUsa.date;
            break;
          }
          case Format.dateTime: {
            format = FormatUsa.dateTime;
            break;
          }
          case Format.time: {
            format = FormatUsa.time;
            break;
          }
        }
      }
    }
    if (!businessLine) {
      return moment
        .utc(date)
        .local()
        .format(format);
    } else {
      return country === CountryEnum.MEXICO &&
        businessLine === BusinessLineCode.Cement
        ? moment
            .utc(date)
            .local()
            .format(format)
        : moment.utc(date).format(format);
    }
  }
}
