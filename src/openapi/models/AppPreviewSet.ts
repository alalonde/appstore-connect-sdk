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
import type { AppPreviewSetAttributes } from './AppPreviewSetAttributes';
import {
    AppPreviewSetAttributesFromJSON,
    AppPreviewSetAttributesFromJSONTyped,
    AppPreviewSetAttributesToJSON,
} from './AppPreviewSetAttributes';
import type { AppPreviewSetRelationships } from './AppPreviewSetRelationships';
import {
    AppPreviewSetRelationshipsFromJSON,
    AppPreviewSetRelationshipsFromJSONTyped,
    AppPreviewSetRelationshipsToJSON,
} from './AppPreviewSetRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppPreviewSet
 */
export interface AppPreviewSet {
    /**
     * 
     * @type {string}
     * @memberof AppPreviewSet
     */
    type: AppPreviewSetTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppPreviewSet
     */
    id: string;
    /**
     * 
     * @type {AppPreviewSetAttributes}
     * @memberof AppPreviewSet
     */
    attributes?: AppPreviewSetAttributes;
    /**
     * 
     * @type {AppPreviewSetRelationships}
     * @memberof AppPreviewSet
     */
    relationships?: AppPreviewSetRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppPreviewSet
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppPreviewSetTypeEnum = {
    AppPreviewSets: 'appPreviewSets'
} as const;
export type AppPreviewSetTypeEnum = typeof AppPreviewSetTypeEnum[keyof typeof AppPreviewSetTypeEnum];


/**
 * Check if a given object implements the AppPreviewSet interface.
 */
export function instanceOfAppPreviewSet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppPreviewSetFromJSON(json: any): AppPreviewSet {
    return AppPreviewSetFromJSONTyped(json, false);
}

export function AppPreviewSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppPreviewSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppPreviewSetAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppPreviewSetRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppPreviewSetToJSON(value?: AppPreviewSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppPreviewSetAttributesToJSON(value.attributes),
        'relationships': AppPreviewSetRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

