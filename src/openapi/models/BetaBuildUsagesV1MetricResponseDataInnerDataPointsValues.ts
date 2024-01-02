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
/**
 * 
 * @export
 * @interface BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues
 */
export interface BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues {
    /**
     * 
     * @type {number}
     * @memberof BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues
     */
    crashCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues
     */
    installCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues
     */
    sessionCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues
     */
    feedbackCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues
     */
    inviteCount?: number;
}

/**
 * Check if a given object implements the BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues interface.
 */
export function instanceOfBetaBuildUsagesV1MetricResponseDataInnerDataPointsValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesFromJSON(json: any): BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues {
    return BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json, false);
}

export function BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'crashCount': !exists(json, 'crashCount') ? undefined : json['crashCount'],
        'installCount': !exists(json, 'installCount') ? undefined : json['installCount'],
        'sessionCount': !exists(json, 'sessionCount') ? undefined : json['sessionCount'],
        'feedbackCount': !exists(json, 'feedbackCount') ? undefined : json['feedbackCount'],
        'inviteCount': !exists(json, 'inviteCount') ? undefined : json['inviteCount'],
    };
}

export function BetaBuildUsagesV1MetricResponseDataInnerDataPointsValuesToJSON(value?: BetaBuildUsagesV1MetricResponseDataInnerDataPointsValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'crashCount': value.crashCount,
        'installCount': value.installCount,
        'sessionCount': value.sessionCount,
        'feedbackCount': value.feedbackCount,
        'inviteCount': value.inviteCount,
    };
}

