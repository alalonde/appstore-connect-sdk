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
import type { PrereleaseVersionAttributes } from './PrereleaseVersionAttributes';
import {
    PrereleaseVersionAttributesFromJSON,
    PrereleaseVersionAttributesFromJSONTyped,
    PrereleaseVersionAttributesToJSON,
} from './PrereleaseVersionAttributes';
import type { PrereleaseVersionRelationships } from './PrereleaseVersionRelationships';
import {
    PrereleaseVersionRelationshipsFromJSON,
    PrereleaseVersionRelationshipsFromJSONTyped,
    PrereleaseVersionRelationshipsToJSON,
} from './PrereleaseVersionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface PrereleaseVersion
 */
export interface PrereleaseVersion {
    /**
     * 
     * @type {string}
     * @memberof PrereleaseVersion
     */
    type: PrereleaseVersionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PrereleaseVersion
     */
    id: string;
    /**
     * 
     * @type {PrereleaseVersionAttributes}
     * @memberof PrereleaseVersion
     */
    attributes?: PrereleaseVersionAttributes;
    /**
     * 
     * @type {PrereleaseVersionRelationships}
     * @memberof PrereleaseVersion
     */
    relationships?: PrereleaseVersionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof PrereleaseVersion
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const PrereleaseVersionTypeEnum = {
    PreReleaseVersions: 'preReleaseVersions'
} as const;
export type PrereleaseVersionTypeEnum = typeof PrereleaseVersionTypeEnum[keyof typeof PrereleaseVersionTypeEnum];


/**
 * Check if a given object implements the PrereleaseVersion interface.
 */
export function instanceOfPrereleaseVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function PrereleaseVersionFromJSON(json: any): PrereleaseVersion {
    return PrereleaseVersionFromJSONTyped(json, false);
}

export function PrereleaseVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrereleaseVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : PrereleaseVersionAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : PrereleaseVersionRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function PrereleaseVersionToJSON(value?: PrereleaseVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': PrereleaseVersionAttributesToJSON(value.attributes),
        'relationships': PrereleaseVersionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

