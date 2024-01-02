/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues } from './BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues';
import {
    BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON,
    BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesFromJSONTyped,
    BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesToJSON,
} from './BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues';

/**
 * 
 * @export
 * @interface BetaBuildUsagesV1MetricResponseDataInnerDataPoints
 */
export interface BetaBuildUsagesV1MetricResponseDataInnerDataPoints {
    /**
     * 
     * @type {Date}
     * @memberof BetaBuildUsagesV1MetricResponseDataInnerDataPoints
     */
    start?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BetaBuildUsagesV1MetricResponseDataInnerDataPoints
     */
    end?: Date;
    /**
     * 
     * @type {BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues}
     * @memberof BetaBuildUsagesV1MetricResponseDataInnerDataPoints
     */
    values?: BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues;
}

/**
 * Check if a given object implements the BetaBuildUsagesV1MetricResponseDataInnerDataPoints interface.
 */
export function instanceOfBetaBuildUsagesV1MetricResponseDataInnerDataPoints(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSON(json: any): BetaBuildUsagesV1MetricResponseDataInnerDataPoints {
    return BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped(json, false);
}

export function BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildUsagesV1MetricResponseDataInnerDataPoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'values': !exists(json, 'values') ? undefined : BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON(json['values']),
    };
}

export function BetaBuildUsagesV1MetricResponseDataInnerDataPointsToJSON(value?: BetaBuildUsagesV1MetricResponseDataInnerDataPoints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start': value.start === undefined ? undefined : (value.start.toISOString()),
        'end': value.end === undefined ? undefined : (value.end.toISOString()),
        'values': BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesToJSON(value.values),
    };
}

