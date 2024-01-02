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
import type { AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData } from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData';
import {
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSON,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSONTyped,
    AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataToJSON,
} from './AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData';

/**
 * 
 * @export
 * @interface AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion
 */
export interface AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion {
    /**
     * 
     * @type {AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData}
     * @memberof AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion
     */
    data?: AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionData;
}

/**
 * Check if a given object implements the AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion interface.
 */
export function instanceOfAppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSON(json: any): AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion {
    return AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataFromJSON(json['data']),
    };
}

export function AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersionToJSON(value?: AppClipDefaultExperienceCreateRequestDataRelationshipsReleaseWithAppStoreVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppClipDefaultExperienceRelationshipsReleaseWithAppStoreVersionDataToJSON(value.data),
    };
}

