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
/**
 * 
 * @export
 * @interface AppClipAdvancedExperienceRelationshipsAppClipData
 */
export interface AppClipAdvancedExperienceRelationshipsAppClipData {
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsAppClipData
     */
    type: AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipAdvancedExperienceRelationshipsAppClipData
     */
    id: string;
}


/**
 * @export
 */
export const AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum = {
    AppClips: 'appClips'
} as const;
export type AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum = typeof AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum[keyof typeof AppClipAdvancedExperienceRelationshipsAppClipDataTypeEnum];


/**
 * Check if a given object implements the AppClipAdvancedExperienceRelationshipsAppClipData interface.
 */
export function instanceOfAppClipAdvancedExperienceRelationshipsAppClipData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipAdvancedExperienceRelationshipsAppClipDataFromJSON(json: any): AppClipAdvancedExperienceRelationshipsAppClipData {
    return AppClipAdvancedExperienceRelationshipsAppClipDataFromJSONTyped(json, false);
}

export function AppClipAdvancedExperienceRelationshipsAppClipDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipAdvancedExperienceRelationshipsAppClipData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function AppClipAdvancedExperienceRelationshipsAppClipDataToJSON(value?: AppClipAdvancedExperienceRelationshipsAppClipData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

