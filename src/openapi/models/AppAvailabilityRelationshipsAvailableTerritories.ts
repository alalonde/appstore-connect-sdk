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
import type { AppAvailabilityRelationshipsAvailableTerritoriesDataInner } from './AppAvailabilityRelationshipsAvailableTerritoriesDataInner';
import {
    AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON,
    AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSONTyped,
    AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON,
} from './AppAvailabilityRelationshipsAvailableTerritoriesDataInner';
import type { AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks } from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import {
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSONTyped,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON,
} from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface AppAvailabilityRelationshipsAvailableTerritories
 */
export interface AppAvailabilityRelationshipsAvailableTerritories {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof AppAvailabilityRelationshipsAvailableTerritories
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof AppAvailabilityRelationshipsAvailableTerritories
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<AppAvailabilityRelationshipsAvailableTerritoriesDataInner>}
     * @memberof AppAvailabilityRelationshipsAvailableTerritories
     */
    data?: Array<AppAvailabilityRelationshipsAvailableTerritoriesDataInner>;
}

/**
 * Check if a given object implements the AppAvailabilityRelationshipsAvailableTerritories interface.
 */
export function instanceOfAppAvailabilityRelationshipsAvailableTerritories(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppAvailabilityRelationshipsAvailableTerritoriesFromJSON(json: any): AppAvailabilityRelationshipsAvailableTerritories {
    return AppAvailabilityRelationshipsAvailableTerritoriesFromJSONTyped(json, false);
}

export function AppAvailabilityRelationshipsAvailableTerritoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityRelationshipsAvailableTerritories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AppAvailabilityRelationshipsAvailableTerritoriesDataInnerFromJSON)),
    };
}

export function AppAvailabilityRelationshipsAvailableTerritoriesToJSON(value?: AppAvailabilityRelationshipsAvailableTerritories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AppAvailabilityRelationshipsAvailableTerritoriesDataInnerToJSON)),
    };
}

