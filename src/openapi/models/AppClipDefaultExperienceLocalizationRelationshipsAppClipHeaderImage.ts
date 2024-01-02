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
import type { AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData } from './AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData';
import {
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSON,
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSONTyped,
    AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataToJSON,
} from './AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage
 */
export interface AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData}
     * @memberof AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage
     */
    data?: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage interface.
 */
export function instanceOfAppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSON(json: any): AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage {
    return AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageToJSON(value?: AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': AppClipDefaultExperienceLocalizationRelationshipsAppClipHeaderImageDataToJSON(value.data),
    };
}

