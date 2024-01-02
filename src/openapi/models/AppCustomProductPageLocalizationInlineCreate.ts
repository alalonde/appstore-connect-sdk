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
import type { AppCustomProductPageLocalizationInlineCreateAttributes } from './AppCustomProductPageLocalizationInlineCreateAttributes';
import {
    AppCustomProductPageLocalizationInlineCreateAttributesFromJSON,
    AppCustomProductPageLocalizationInlineCreateAttributesFromJSONTyped,
    AppCustomProductPageLocalizationInlineCreateAttributesToJSON,
} from './AppCustomProductPageLocalizationInlineCreateAttributes';
import type { AppCustomProductPageLocalizationInlineCreateRelationships } from './AppCustomProductPageLocalizationInlineCreateRelationships';
import {
    AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSON,
    AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSONTyped,
    AppCustomProductPageLocalizationInlineCreateRelationshipsToJSON,
} from './AppCustomProductPageLocalizationInlineCreateRelationships';

/**
 * 
 * @export
 * @interface AppCustomProductPageLocalizationInlineCreate
 */
export interface AppCustomProductPageLocalizationInlineCreate {
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationInlineCreate
     */
    type: AppCustomProductPageLocalizationInlineCreateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppCustomProductPageLocalizationInlineCreate
     */
    id?: string;
    /**
     * 
     * @type {AppCustomProductPageLocalizationInlineCreateAttributes}
     * @memberof AppCustomProductPageLocalizationInlineCreate
     */
    attributes: AppCustomProductPageLocalizationInlineCreateAttributes;
    /**
     * 
     * @type {AppCustomProductPageLocalizationInlineCreateRelationships}
     * @memberof AppCustomProductPageLocalizationInlineCreate
     */
    relationships?: AppCustomProductPageLocalizationInlineCreateRelationships;
}


/**
 * @export
 */
export const AppCustomProductPageLocalizationInlineCreateTypeEnum = {
    AppCustomProductPageLocalizations: 'appCustomProductPageLocalizations'
} as const;
export type AppCustomProductPageLocalizationInlineCreateTypeEnum = typeof AppCustomProductPageLocalizationInlineCreateTypeEnum[keyof typeof AppCustomProductPageLocalizationInlineCreateTypeEnum];


/**
 * Check if a given object implements the AppCustomProductPageLocalizationInlineCreate interface.
 */
export function instanceOfAppCustomProductPageLocalizationInlineCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function AppCustomProductPageLocalizationInlineCreateFromJSON(json: any): AppCustomProductPageLocalizationInlineCreate {
    return AppCustomProductPageLocalizationInlineCreateFromJSONTyped(json, false);
}

export function AppCustomProductPageLocalizationInlineCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCustomProductPageLocalizationInlineCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'attributes': AppCustomProductPageLocalizationInlineCreateAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppCustomProductPageLocalizationInlineCreateRelationshipsFromJSON(json['relationships']),
    };
}

export function AppCustomProductPageLocalizationInlineCreateToJSON(value?: AppCustomProductPageLocalizationInlineCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppCustomProductPageLocalizationInlineCreateAttributesToJSON(value.attributes),
        'relationships': AppCustomProductPageLocalizationInlineCreateRelationshipsToJSON(value.relationships),
    };
}

