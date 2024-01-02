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
import type { AppInfoRelationshipsAgeRatingDeclarationData } from './AppInfoRelationshipsAgeRatingDeclarationData';
import {
    AppInfoRelationshipsAgeRatingDeclarationDataFromJSON,
    AppInfoRelationshipsAgeRatingDeclarationDataFromJSONTyped,
    AppInfoRelationshipsAgeRatingDeclarationDataToJSON,
} from './AppInfoRelationshipsAgeRatingDeclarationData';

/**
 * 
 * @export
 * @interface AppInfoRelationshipsAgeRatingDeclaration
 */
export interface AppInfoRelationshipsAgeRatingDeclaration {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof AppInfoRelationshipsAgeRatingDeclaration
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {AppInfoRelationshipsAgeRatingDeclarationData}
     * @memberof AppInfoRelationshipsAgeRatingDeclaration
     */
    data?: AppInfoRelationshipsAgeRatingDeclarationData;
}

/**
 * Check if a given object implements the AppInfoRelationshipsAgeRatingDeclaration interface.
 */
export function instanceOfAppInfoRelationshipsAgeRatingDeclaration(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoRelationshipsAgeRatingDeclarationFromJSON(json: any): AppInfoRelationshipsAgeRatingDeclaration {
    return AppInfoRelationshipsAgeRatingDeclarationFromJSONTyped(json, false);
}

export function AppInfoRelationshipsAgeRatingDeclarationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoRelationshipsAgeRatingDeclaration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppInfoRelationshipsAgeRatingDeclarationDataFromJSON(json['data']),
    };
}

export function AppInfoRelationshipsAgeRatingDeclarationToJSON(value?: AppInfoRelationshipsAgeRatingDeclaration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': AppInfoRelationshipsAgeRatingDeclarationDataToJSON(value.data),
    };
}

