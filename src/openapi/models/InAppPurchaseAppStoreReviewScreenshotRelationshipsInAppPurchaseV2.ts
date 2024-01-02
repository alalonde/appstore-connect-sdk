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
import type { AppRelationshipsInAppPurchasesDataInner } from './AppRelationshipsInAppPurchasesDataInner';
import {
    AppRelationshipsInAppPurchasesDataInnerFromJSON,
    AppRelationshipsInAppPurchasesDataInnerFromJSONTyped,
    AppRelationshipsInAppPurchasesDataInnerToJSON,
} from './AppRelationshipsInAppPurchasesDataInner';

/**
 * 
 * @export
 * @interface InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2
 */
export interface InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {AppRelationshipsInAppPurchasesDataInner}
     * @memberof InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2
     */
    data?: AppRelationshipsInAppPurchasesDataInner;
}

/**
 * Check if a given object implements the InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 interface.
 */
export function instanceOfInAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSON(json: any): InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    return InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped(json, false);
}

export function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppRelationshipsInAppPurchasesDataInnerFromJSON(json['data']),
    };
}

export function InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2ToJSON(value?: InAppPurchaseAppStoreReviewScreenshotRelationshipsInAppPurchaseV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': AppRelationshipsInAppPurchasesDataInnerToJSON(value.data),
    };
}

