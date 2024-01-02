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
import type { BetaBuildUsagesV1MetricResponseDataInnerDataPoints } from './BetaBuildUsagesV1MetricResponseDataInnerDataPoints';
import {
    BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSON,
    BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSONTyped,
    BetaBuildUsagesV1MetricResponseDataInnerDataPointsToJSON,
} from './BetaBuildUsagesV1MetricResponseDataInnerDataPoints';
import type { BetaBuildUsagesV1MetricResponseDataInnerDimensions } from './BetaBuildUsagesV1MetricResponseDataInnerDimensions';
import {
    BetaBuildUsagesV1MetricResponseDataInnerDimensionsFromJSON,
    BetaBuildUsagesV1MetricResponseDataInnerDimensionsFromJSONTyped,
    BetaBuildUsagesV1MetricResponseDataInnerDimensionsToJSON,
} from './BetaBuildUsagesV1MetricResponseDataInnerDimensions';

/**
 * 
 * @export
 * @interface BetaBuildUsagesV1MetricResponseDataInner
 */
export interface BetaBuildUsagesV1MetricResponseDataInner {
    /**
     * 
     * @type {BetaBuildUsagesV1MetricResponseDataInnerDataPoints}
     * @memberof BetaBuildUsagesV1MetricResponseDataInner
     */
    dataPoints?: BetaBuildUsagesV1MetricResponseDataInnerDataPoints;
    /**
     * 
     * @type {BetaBuildUsagesV1MetricResponseDataInnerDimensions}
     * @memberof BetaBuildUsagesV1MetricResponseDataInner
     */
    dimensions?: BetaBuildUsagesV1MetricResponseDataInnerDimensions;
}

/**
 * Check if a given object implements the BetaBuildUsagesV1MetricResponseDataInner interface.
 */
export function instanceOfBetaBuildUsagesV1MetricResponseDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaBuildUsagesV1MetricResponseDataInnerFromJSON(json: any): BetaBuildUsagesV1MetricResponseDataInner {
    return BetaBuildUsagesV1MetricResponseDataInnerFromJSONTyped(json, false);
}

export function BetaBuildUsagesV1MetricResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildUsagesV1MetricResponseDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataPoints': !exists(json, 'dataPoints') ? undefined : BetaBuildUsagesV1MetricResponseDataInnerDataPointsFromJSON(json['dataPoints']),
        'dimensions': !exists(json, 'dimensions') ? undefined : BetaBuildUsagesV1MetricResponseDataInnerDimensionsFromJSON(json['dimensions']),
    };
}

export function BetaBuildUsagesV1MetricResponseDataInnerToJSON(value?: BetaBuildUsagesV1MetricResponseDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataPoints': BetaBuildUsagesV1MetricResponseDataInnerDataPointsToJSON(value.dataPoints),
        'dimensions': BetaBuildUsagesV1MetricResponseDataInnerDimensionsToJSON(value.dimensions),
    };
}

