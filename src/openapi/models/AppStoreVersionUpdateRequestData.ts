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
import type { AppStoreVersionUpdateRequestDataAttributes } from './AppStoreVersionUpdateRequestDataAttributes';
import {
    AppStoreVersionUpdateRequestDataAttributesFromJSON,
    AppStoreVersionUpdateRequestDataAttributesFromJSONTyped,
    AppStoreVersionUpdateRequestDataAttributesToJSON,
} from './AppStoreVersionUpdateRequestDataAttributes';
import type { AppStoreVersionUpdateRequestDataRelationships } from './AppStoreVersionUpdateRequestDataRelationships';
import {
    AppStoreVersionUpdateRequestDataRelationshipsFromJSON,
    AppStoreVersionUpdateRequestDataRelationshipsFromJSONTyped,
    AppStoreVersionUpdateRequestDataRelationshipsToJSON,
} from './AppStoreVersionUpdateRequestDataRelationships';

/**
 * 
 * @export
 * @interface AppStoreVersionUpdateRequestData
 */
export interface AppStoreVersionUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionUpdateRequestData
     */
    type: AppStoreVersionUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersionUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionUpdateRequestDataAttributes}
     * @memberof AppStoreVersionUpdateRequestData
     */
    attributes?: AppStoreVersionUpdateRequestDataAttributes;
    /**
     * 
     * @type {AppStoreVersionUpdateRequestDataRelationships}
     * @memberof AppStoreVersionUpdateRequestData
     */
    relationships?: AppStoreVersionUpdateRequestDataRelationships;
}


/**
 * @export
 */
export const AppStoreVersionUpdateRequestDataTypeEnum = {
    AppStoreVersions: 'appStoreVersions'
} as const;
export type AppStoreVersionUpdateRequestDataTypeEnum = typeof AppStoreVersionUpdateRequestDataTypeEnum[keyof typeof AppStoreVersionUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the AppStoreVersionUpdateRequestData interface.
 */
export function instanceOfAppStoreVersionUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionUpdateRequestDataFromJSON(json: any): AppStoreVersionUpdateRequestData {
    return AppStoreVersionUpdateRequestDataFromJSONTyped(json, false);
}

export function AppStoreVersionUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersionUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreVersionUpdateRequestDataAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppStoreVersionUpdateRequestDataRelationshipsFromJSON(json['relationships']),
    };
}

export function AppStoreVersionUpdateRequestDataToJSON(value?: AppStoreVersionUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreVersionUpdateRequestDataAttributesToJSON(value.attributes),
        'relationships': AppStoreVersionUpdateRequestDataRelationshipsToJSON(value.relationships),
    };
}

