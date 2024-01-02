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
import type { AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience } from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience';
import {
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON,
} from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience';

/**
 * 
 * @export
 * @interface AppClipAppStoreReviewDetailRelationships
 */
export interface AppClipAppStoreReviewDetailRelationships {
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience}
     * @memberof AppClipAppStoreReviewDetailRelationships
     */
    appClipDefaultExperience?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperience;
}

/**
 * Check if a given object implements the AppClipAppStoreReviewDetailRelationships interface.
 */
export function instanceOfAppClipAppStoreReviewDetailRelationships(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAppStoreReviewDetailRelationshipsFromJSON(json: any): AppClipAppStoreReviewDetailRelationships {
    return AppClipAppStoreReviewDetailRelationshipsFromJSONTyped(json, false);
}

export function AppClipAppStoreReviewDetailRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAppStoreReviewDetailRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appClipDefaultExperience': !exists(json, 'appClipDefaultExperience') ? undefined : AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceFromJSON(json['appClipDefaultExperience']),
    };
}

export function AppClipAppStoreReviewDetailRelationshipsToJSON(value?: AppClipAppStoreReviewDetailRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appClipDefaultExperience': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceToJSON(value.appClipDefaultExperience),
    };
}

