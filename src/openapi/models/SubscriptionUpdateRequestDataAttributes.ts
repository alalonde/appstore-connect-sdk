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
 * @interface SubscriptionUpdateRequestDataAttributes
 */
export interface SubscriptionUpdateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionUpdateRequestDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionUpdateRequestDataAttributes
     */
    familySharable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionUpdateRequestDataAttributes
     */
    subscriptionPeriod?: SubscriptionUpdateRequestDataAttributesSubscriptionPeriodEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionUpdateRequestDataAttributes
     */
    reviewNote?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionUpdateRequestDataAttributes
     */
    groupLevel?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionUpdateRequestDataAttributes
     * @deprecated
     */
    availableInAllTerritories?: boolean;
}


/**
 * @export
 */
export const SubscriptionUpdateRequestDataAttributesSubscriptionPeriodEnum = {
    OneWeek: 'ONE_WEEK',
    OneMonth: 'ONE_MONTH',
    TwoMonths: 'TWO_MONTHS',
    ThreeMonths: 'THREE_MONTHS',
    SixMonths: 'SIX_MONTHS',
    OneYear: 'ONE_YEAR'
} as const;
export type SubscriptionUpdateRequestDataAttributesSubscriptionPeriodEnum = typeof SubscriptionUpdateRequestDataAttributesSubscriptionPeriodEnum[keyof typeof SubscriptionUpdateRequestDataAttributesSubscriptionPeriodEnum];


/**
 * Check if a given object implements the SubscriptionUpdateRequestDataAttributes interface.
 */
export function instanceOfSubscriptionUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionUpdateRequestDataAttributesFromJSON(json: any): SubscriptionUpdateRequestDataAttributes {
    return SubscriptionUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function SubscriptionUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'familySharable': !exists(json, 'familySharable') ? undefined : json['familySharable'],
        'subscriptionPeriod': !exists(json, 'subscriptionPeriod') ? undefined : json['subscriptionPeriod'],
        'reviewNote': !exists(json, 'reviewNote') ? undefined : json['reviewNote'],
        'groupLevel': !exists(json, 'groupLevel') ? undefined : json['groupLevel'],
        'availableInAllTerritories': !exists(json, 'availableInAllTerritories') ? undefined : json['availableInAllTerritories'],
    };
}

export function SubscriptionUpdateRequestDataAttributesToJSON(value?: SubscriptionUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'familySharable': value.familySharable,
        'subscriptionPeriod': value.subscriptionPeriod,
        'reviewNote': value.reviewNote,
        'groupLevel': value.groupLevel,
        'availableInAllTerritories': value.availableInAllTerritories,
    };
}

