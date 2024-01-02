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
 * @interface PromotedPurchaseCreateRequestDataAttributes
 */
export interface PromotedPurchaseCreateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseCreateRequestDataAttributes
     */
    visibleForAllUsers: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PromotedPurchaseCreateRequestDataAttributes
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the PromotedPurchaseCreateRequestDataAttributes interface.
 */
export function instanceOfPromotedPurchaseCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "visibleForAllUsers" in value;

    return isInstance;
}

export function PromotedPurchaseCreateRequestDataAttributesFromJSON(json: any): PromotedPurchaseCreateRequestDataAttributes {
    return PromotedPurchaseCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function PromotedPurchaseCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotedPurchaseCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'visibleForAllUsers': json['visibleForAllUsers'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function PromotedPurchaseCreateRequestDataAttributesToJSON(value?: PromotedPurchaseCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'visibleForAllUsers': value.visibleForAllUsers,
        'enabled': value.enabled,
    };
}

