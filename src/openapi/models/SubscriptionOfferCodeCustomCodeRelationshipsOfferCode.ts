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
import type { AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks } from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import {
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSONTyped,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON,
} from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import type { SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData } from './SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData';
import {
    SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeDataFromJSON,
    SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeDataFromJSONTyped,
    SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeDataToJSON,
} from './SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData';

/**
 * 
 * @export
 * @interface SubscriptionOfferCodeCustomCodeRelationshipsOfferCode
 */
export interface SubscriptionOfferCodeCustomCodeRelationshipsOfferCode {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof SubscriptionOfferCodeCustomCodeRelationshipsOfferCode
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData}
     * @memberof SubscriptionOfferCodeCustomCodeRelationshipsOfferCode
     */
    data?: SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeData;
}

/**
 * Check if a given object implements the SubscriptionOfferCodeCustomCodeRelationshipsOfferCode interface.
 */
export function instanceOfSubscriptionOfferCodeCustomCodeRelationshipsOfferCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeFromJSON(json: any): SubscriptionOfferCodeCustomCodeRelationshipsOfferCode {
    return SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeFromJSONTyped(json, false);
}

export function SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeCustomCodeRelationshipsOfferCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeDataFromJSON(json['data']),
    };
}

export function SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeToJSON(value?: SubscriptionOfferCodeCustomCodeRelationshipsOfferCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': SubscriptionOfferCodeCustomCodeRelationshipsOfferCodeDataToJSON(value.data),
    };
}

