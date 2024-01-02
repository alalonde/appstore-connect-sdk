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
 * @interface InAppPurchaseV2RelationshipsIapPriceScheduleData
 */
export interface InAppPurchaseV2RelationshipsIapPriceScheduleData {
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsIapPriceScheduleData
     */
    type: InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof InAppPurchaseV2RelationshipsIapPriceScheduleData
     */
    id: string;
}


/**
 * @export
 */
export const InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum = {
    InAppPurchasePriceSchedules: 'inAppPurchasePriceSchedules'
} as const;
export type InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum = typeof InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum[keyof typeof InAppPurchaseV2RelationshipsIapPriceScheduleDataTypeEnum];


/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsIapPriceScheduleData interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsIapPriceScheduleData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function InAppPurchaseV2RelationshipsIapPriceScheduleDataFromJSON(json: any): InAppPurchaseV2RelationshipsIapPriceScheduleData {
    return InAppPurchaseV2RelationshipsIapPriceScheduleDataFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsIapPriceScheduleDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsIapPriceScheduleData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function InAppPurchaseV2RelationshipsIapPriceScheduleDataToJSON(value?: InAppPurchaseV2RelationshipsIapPriceScheduleData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

