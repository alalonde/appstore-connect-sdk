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
import type { InAppPurchasePriceScheduleCreateRequestDataRelationships } from './InAppPurchasePriceScheduleCreateRequestDataRelationships';
import {
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsFromJSON,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsFromJSONTyped,
    InAppPurchasePriceScheduleCreateRequestDataRelationshipsToJSON,
} from './InAppPurchasePriceScheduleCreateRequestDataRelationships';

/**
 * 
 * @export
 * @interface InAppPurchasePriceScheduleCreateRequestData
 */
export interface InAppPurchasePriceScheduleCreateRequestData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchasePriceScheduleCreateRequestData
     */
    type: InAppPurchasePriceScheduleCreateRequestDataTypeEnum;
    /**
     * 
     * @type {InAppPurchasePriceScheduleCreateRequestDataRelationships}
     * @memberof InAppPurchasePriceScheduleCreateRequestData
     */
    relationships: InAppPurchasePriceScheduleCreateRequestDataRelationships;
}


/**
 * @export
 */
export const InAppPurchasePriceScheduleCreateRequestDataTypeEnum = {
    InAppPurchasePriceSchedules: 'inAppPurchasePriceSchedules'
} as const;
export type InAppPurchasePriceScheduleCreateRequestDataTypeEnum = typeof InAppPurchasePriceScheduleCreateRequestDataTypeEnum[keyof typeof InAppPurchasePriceScheduleCreateRequestDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchasePriceScheduleCreateRequestData interface.
 */
export function instanceOfInAppPurchasePriceScheduleCreateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function InAppPurchasePriceScheduleCreateRequestDataFromJSON(json: any): InAppPurchasePriceScheduleCreateRequestData {
    return InAppPurchasePriceScheduleCreateRequestDataFromJSONTyped(json, false);
}

export function InAppPurchasePriceScheduleCreateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceScheduleCreateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'relationships': InAppPurchasePriceScheduleCreateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function InAppPurchasePriceScheduleCreateRequestDataToJSON(value?: InAppPurchasePriceScheduleCreateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'relationships': InAppPurchasePriceScheduleCreateRequestDataRelationshipsToJSON(value.relationships),
    };
}

