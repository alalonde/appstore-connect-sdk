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
import type { AppClipAdvancedExperienceRelationshipsAppClipData } from './AppClipAdvancedExperienceRelationshipsAppClipData';
import {
    AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON,
    AppClipAdvancedExperienceRelationshipsAppClipDataFromJSONTyped,
    AppClipAdvancedExperienceRelationshipsAppClipDataToJSON,
} from './AppClipAdvancedExperienceRelationshipsAppClipData';

/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip
 */
export interface AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip {
    /**
     * 
     * @type {AppClipAdvancedExperienceRelationshipsAppClipData}
     * @memberof AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip
     */
    data?: AppClipAdvancedExperienceRelationshipsAppClipData;
}

/**
 * Check if a given object implements the AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip interface.
 */
export function instanceOfAppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClipFromJSON(json: any): AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip {
    return AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClipFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClipFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON(json['data']),
    };
}

export function AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClipToJSON(value?: AppClipAdvancedExperienceUpdateRequestDataRelationshipsAppClip | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipAdvancedExperienceRelationshipsAppClipDataToJSON(value.data),
    };
}

