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
import type { CiMacOsVersionRelationshipsXcodeVersionsDataInner } from './CiMacOsVersionRelationshipsXcodeVersionsDataInner';
import {
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSONTyped,
    CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON,
} from './CiMacOsVersionRelationshipsXcodeVersionsDataInner';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface CiMacOsVersionRelationshipsXcodeVersions
 */
export interface CiMacOsVersionRelationshipsXcodeVersions {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof CiMacOsVersionRelationshipsXcodeVersions
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof CiMacOsVersionRelationshipsXcodeVersions
     */
    meta?: PagingInformation;
    /**
     * 
     * @type {Array<CiMacOsVersionRelationshipsXcodeVersionsDataInner>}
     * @memberof CiMacOsVersionRelationshipsXcodeVersions
     */
    data?: Array<CiMacOsVersionRelationshipsXcodeVersionsDataInner>;
}

/**
 * Check if a given object implements the CiMacOsVersionRelationshipsXcodeVersions interface.
 */
export function instanceOfCiMacOsVersionRelationshipsXcodeVersions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiMacOsVersionRelationshipsXcodeVersionsFromJSON(json: any): CiMacOsVersionRelationshipsXcodeVersions {
    return CiMacOsVersionRelationshipsXcodeVersionsFromJSONTyped(json, false);
}

export function CiMacOsVersionRelationshipsXcodeVersionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiMacOsVersionRelationshipsXcodeVersions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(CiMacOsVersionRelationshipsXcodeVersionsDataInnerFromJSON)),
    };
}

export function CiMacOsVersionRelationshipsXcodeVersionsToJSON(value?: CiMacOsVersionRelationshipsXcodeVersions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(CiMacOsVersionRelationshipsXcodeVersionsDataInnerToJSON)),
    };
}

