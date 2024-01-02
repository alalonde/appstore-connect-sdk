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
import type { AppAvailabilityV2RelationshipsTerritoryAvailabilities } from './AppAvailabilityV2RelationshipsTerritoryAvailabilities';
import {
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesFromJSON,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesFromJSONTyped,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesToJSON,
} from './AppAvailabilityV2RelationshipsTerritoryAvailabilities';

/**
 * 
 * @export
 * @interface AppAvailabilityV2Relationships
 */
export interface AppAvailabilityV2Relationships {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilities}
     * @memberof AppAvailabilityV2Relationships
     */
    territoryAvailabilities?: AppAvailabilityV2RelationshipsTerritoryAvailabilities;
}

/**
 * Check if a given object implements the AppAvailabilityV2Relationships interface.
 */
export function instanceOfAppAvailabilityV2Relationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppAvailabilityV2RelationshipsFromJSON(json: any): AppAvailabilityV2Relationships {
    return AppAvailabilityV2RelationshipsFromJSONTyped(json, false);
}

export function AppAvailabilityV2RelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppAvailabilityV2Relationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'territoryAvailabilities': !exists(json, 'territoryAvailabilities') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesFromJSON(json['territoryAvailabilities']),
    };
}

export function AppAvailabilityV2RelationshipsToJSON(value?: AppAvailabilityV2Relationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'territoryAvailabilities': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesToJSON(value.territoryAvailabilities),
    };
}

