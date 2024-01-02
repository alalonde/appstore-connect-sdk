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
import type { AppStoreVersionAttributes } from './AppStoreVersionAttributes';
import {
    AppStoreVersionAttributesFromJSON,
    AppStoreVersionAttributesFromJSONTyped,
    AppStoreVersionAttributesToJSON,
} from './AppStoreVersionAttributes';
import type { AppStoreVersionRelationships } from './AppStoreVersionRelationships';
import {
    AppStoreVersionRelationshipsFromJSON,
    AppStoreVersionRelationshipsFromJSONTyped,
    AppStoreVersionRelationshipsToJSON,
} from './AppStoreVersionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppStoreVersion
 */
export interface AppStoreVersion {
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersion
     */
    type: AppStoreVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppStoreVersion
     */
    id: string;
    /**
     * 
     * @type {AppStoreVersionAttributes}
     * @memberof AppStoreVersion
     */
    attributes?: AppStoreVersionAttributes;
    /**
     * 
     * @type {AppStoreVersionRelationships}
     * @memberof AppStoreVersion
     */
    relationships?: AppStoreVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppStoreVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppStoreVersionTypeEnum = {
    AppStoreVersions: 'appStoreVersions'
} as const;
export type AppStoreVersionTypeEnum = typeof AppStoreVersionTypeEnum[keyof typeof AppStoreVersionTypeEnum];


/**
 * Check if a given object implements the AppStoreVersion interface.
 */
export function instanceOfAppStoreVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppStoreVersionFromJSON(json: any): AppStoreVersion {
    return AppStoreVersionFromJSONTyped(json, false);
}

export function AppStoreVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppStoreVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreVersionAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppStoreVersionRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppStoreVersionToJSON(value?: AppStoreVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreVersionAttributesToJSON(value.attributes),
        'relationships': AppStoreVersionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

