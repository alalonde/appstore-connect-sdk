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
import type { InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner } from './InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner';
import {
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSON,
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSONTyped,
    InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerToJSON,
} from './InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface InAppPurchaseV2RelationshipsInAppPurchaseLocalizations
 */
export interface InAppPurchaseV2RelationshipsInAppPurchaseLocalizations {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizations
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizations
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner>}
     * @memberof InAppPurchaseV2RelationshipsInAppPurchaseLocalizations
     */
    data?: Array<InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInner>;
}

/**
 * Check if a given object implements the InAppPurchaseV2RelationshipsInAppPurchaseLocalizations interface.
 */
export function instanceOfInAppPurchaseV2RelationshipsInAppPurchaseLocalizations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSON(json: any): InAppPurchaseV2RelationshipsInAppPurchaseLocalizations {
    return InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSONTyped(json, false);
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InAppPurchaseV2RelationshipsInAppPurchaseLocalizations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerFromJSON)),
    };
}

export function InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsToJSON(value?: InAppPurchaseV2RelationshipsInAppPurchaseLocalizations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(InAppPurchaseV2RelationshipsInAppPurchaseLocalizationsDataInnerToJSON)),
    };
}

