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
import type { AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData } from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';
import {
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON,
} from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience
 */
export interface AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData}
     * @memberof AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience
     */
    data?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData;
}

/**
 * Check if a given object implements the AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience interface.
 */
export function instanceOfAppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON(json: any): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience {
    return AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON(json['data']),
    };
}

export function AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON(value?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON(value.data),
    };
}

