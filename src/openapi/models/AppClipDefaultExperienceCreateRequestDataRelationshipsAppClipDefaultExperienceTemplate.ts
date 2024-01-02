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
import type { AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData } from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';
import {
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSONTyped,
    AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON,
} from './AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate
 */
export interface AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate {
    /**
     * 
     * @type {AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData}
     * @memberof AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate
     */
    data?: AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate interface.
 */
export function instanceOfAppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSON(json: any): AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate {
    return AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplateToJSON(value?: AppClipDefaultExperienceCreateRequestDataRelationshipsAppClipDefaultExperienceTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipAppStoreReviewDetailRelationshipsAppClipDefaultExperienceDataToJSON(value.data),
    };
}

