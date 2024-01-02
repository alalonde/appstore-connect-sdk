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
import type { SubscriptionPromotionalOfferRelationshipsPricesDataInner } from './SubscriptionPromotionalOfferRelationshipsPricesDataInner';
import {
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSONTyped,
    SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON,
} from './SubscriptionPromotionalOfferRelationshipsPricesDataInner';

/**
 * 
 * @export
 * @interface SubscriptionPromotionalOfferInlineCreateRelationshipsPrices
 */
export interface SubscriptionPromotionalOfferInlineCreateRelationshipsPrices {
    /**
     * 
     * @type {Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>}
     * @memberof SubscriptionPromotionalOfferInlineCreateRelationshipsPrices
     */
    data?: Array<SubscriptionPromotionalOfferRelationshipsPricesDataInner>;
}

/**
 * Check if a given object implements the SubscriptionPromotionalOfferInlineCreateRelationshipsPrices interface.
 */
export function instanceOfSubscriptionPromotionalOfferInlineCreateRelationshipsPrices(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSON(json: any): SubscriptionPromotionalOfferInlineCreateRelationshipsPrices {
    return SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSONTyped(json, false);
}

export function SubscriptionPromotionalOfferInlineCreateRelationshipsPricesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionPromotionalOfferInlineCreateRelationshipsPrices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(SubscriptionPromotionalOfferRelationshipsPricesDataInnerFromJSON)),
    };
}

export function SubscriptionPromotionalOfferInlineCreateRelationshipsPricesToJSON(value?: SubscriptionPromotionalOfferInlineCreateRelationshipsPrices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(SubscriptionPromotionalOfferRelationshipsPricesDataInnerToJSON)),
    };
}

