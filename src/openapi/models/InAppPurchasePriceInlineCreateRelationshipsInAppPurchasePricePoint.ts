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
import type { InAppPurchasePriceRelationshipsInAppPurchasePricePointData } from './InAppPurchasePriceRelationshipsInAppPurchasePricePointData';
import {
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSONTyped,
    InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON,
} from './InAppPurchasePriceRelationshipsInAppPurchasePricePointData';

/**
 * 
 * @export
 * @interface InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint
 */
export interface InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint {
    /**
     * 
     * @type {InAppPurchasePriceRelationshipsInAppPurchasePricePointData}
     * @memberof InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint
     */
    data?: InAppPurchasePriceRelationshipsInAppPurchasePricePointData;
}

/**
 * Check if a given object implements the InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint interface.
 */
export function instanceOfInAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointFromJSON(json: any): InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint {
    return InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointFromJSONTyped(json, false);
}

export function InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : InAppPurchasePriceRelationshipsInAppPurchasePricePointDataFromJSON(json['data']),
    };
}

export function InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePointToJSON(value?: InAppPurchasePriceInlineCreateRelationshipsInAppPurchasePricePoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': InAppPurchasePriceRelationshipsInAppPurchasePricePointDataToJSON(value.data),
    };
}

