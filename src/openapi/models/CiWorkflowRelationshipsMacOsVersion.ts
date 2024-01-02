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
import type { CiWorkflowRelationshipsMacOsVersionData } from './CiWorkflowRelationshipsMacOsVersionData';
import {
    CiWorkflowRelationshipsMacOsVersionDataFromJSON,
    CiWorkflowRelationshipsMacOsVersionDataFromJSONTyped,
    CiWorkflowRelationshipsMacOsVersionDataToJSON,
} from './CiWorkflowRelationshipsMacOsVersionData';

/**
 * 
 * @export
 * @interface CiWorkflowRelationshipsMacOsVersion
 */
export interface CiWorkflowRelationshipsMacOsVersion {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof CiWorkflowRelationshipsMacOsVersion
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {CiWorkflowRelationshipsMacOsVersionData}
     * @memberof CiWorkflowRelationshipsMacOsVersion
     */
    data?: CiWorkflowRelationshipsMacOsVersionData;
}

/**
 * Check if a given object implements the CiWorkflowRelationshipsMacOsVersion interface.
 */
export function instanceOfCiWorkflowRelationshipsMacOsVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiWorkflowRelationshipsMacOsVersionFromJSON(json: any): CiWorkflowRelationshipsMacOsVersion {
    return CiWorkflowRelationshipsMacOsVersionFromJSONTyped(json, false);
}

export function CiWorkflowRelationshipsMacOsVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowRelationshipsMacOsVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : CiWorkflowRelationshipsMacOsVersionDataFromJSON(json['data']),
    };
}

export function CiWorkflowRelationshipsMacOsVersionToJSON(value?: CiWorkflowRelationshipsMacOsVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': CiWorkflowRelationshipsMacOsVersionDataToJSON(value.data),
    };
}

