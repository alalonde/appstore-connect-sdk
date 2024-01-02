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
 * @interface SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData
 */
export interface SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData
     */
    type: SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData
     */
    id: string;
}


/**
 * @export
 */
export const SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataTypeEnum = {
    SubscriptionPricePoints: 'subscriptionPricePoints'
} as const;
export type SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataTypeEnum = typeof SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataTypeEnum[keyof typeof SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataTypeEnum];


/**
 * Check if a given object implements the SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData interface.
 */
export function instanceOfSubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataFromJSON(json: any): SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData {
    return SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataFromJSONTyped(json, false);
}

export function SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointDataToJSON(value?: SubscriptionIntroductoryOfferRelationshipsSubscriptionPricePointData | null): any {
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

