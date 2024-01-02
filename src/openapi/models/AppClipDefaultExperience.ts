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
import type { AppClipDefaultExperienceAttributes } from './AppClipDefaultExperienceAttributes';
import {
    AppClipDefaultExperienceAttributesFromJSON,
    AppClipDefaultExperienceAttributesFromJSONTyped,
    AppClipDefaultExperienceAttributesToJSON,
} from './AppClipDefaultExperienceAttributes';
import type { AppClipDefaultExperienceRelationships } from './AppClipDefaultExperienceRelationships';
import {
    AppClipDefaultExperienceRelationshipsFromJSON,
    AppClipDefaultExperienceRelationshipsFromJSONTyped,
    AppClipDefaultExperienceRelationshipsToJSON,
} from './AppClipDefaultExperienceRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface AppClipDefaultExperience
 */
export interface AppClipDefaultExperience {
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperience
     */
    type: AppClipDefaultExperienceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppClipDefaultExperience
     */
    id: string;
    /**
     * 
     * @type {AppClipDefaultExperienceAttributes}
     * @memberof AppClipDefaultExperience
     */
    attributes?: AppClipDefaultExperienceAttributes;
    /**
     * 
     * @type {AppClipDefaultExperienceRelationships}
     * @memberof AppClipDefaultExperience
     */
    relationships?: AppClipDefaultExperienceRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof AppClipDefaultExperience
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const AppClipDefaultExperienceTypeEnum = {
    AppClipDefaultExperiences: 'appClipDefaultExperiences'
} as const;
export type AppClipDefaultExperienceTypeEnum = typeof AppClipDefaultExperienceTypeEnum[keyof typeof AppClipDefaultExperienceTypeEnum];


/**
 * Check if a given object implements the AppClipDefaultExperience interface.
 */
export function instanceOfAppClipDefaultExperience(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function AppClipDefaultExperienceFromJSON(json: any): AppClipDefaultExperience {
    return AppClipDefaultExperienceFromJSONTyped(json, false);
}

export function AppClipDefaultExperienceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppClipDefaultExperience {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppClipDefaultExperienceAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppClipDefaultExperienceRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function AppClipDefaultExperienceToJSON(value?: AppClipDefaultExperience | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppClipDefaultExperienceAttributesToJSON(value.attributes),
        'relationships': AppClipDefaultExperienceRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

