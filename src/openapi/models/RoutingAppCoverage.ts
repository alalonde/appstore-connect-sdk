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
import type { AppStoreReviewAttachmentAttributes } from './AppStoreReviewAttachmentAttributes';
import {
    AppStoreReviewAttachmentAttributesFromJSON,
    AppStoreReviewAttachmentAttributesFromJSONTyped,
    AppStoreReviewAttachmentAttributesToJSON,
} from './AppStoreReviewAttachmentAttributes';
import type { AppStoreVersionSubmissionRelationships } from './AppStoreVersionSubmissionRelationships';
import {
    AppStoreVersionSubmissionRelationshipsFromJSON,
    AppStoreVersionSubmissionRelationshipsFromJSONTyped,
    AppStoreVersionSubmissionRelationshipsToJSON,
} from './AppStoreVersionSubmissionRelationships';
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface RoutingAppCoverage
 */
export interface RoutingAppCoverage {
    /**
     * 
     * @type {string}
     * @memberof RoutingAppCoverage
     */
    type: RoutingAppCoverageTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RoutingAppCoverage
     */
    id: string;
    /**
     * 
     * @type {AppStoreReviewAttachmentAttributes}
     * @memberof RoutingAppCoverage
     */
    attributes?: AppStoreReviewAttachmentAttributes;
    /**
     * 
     * @type {AppStoreVersionSubmissionRelationships}
     * @memberof RoutingAppCoverage
     */
    relationships?: AppStoreVersionSubmissionRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof RoutingAppCoverage
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const RoutingAppCoverageTypeEnum = {
    RoutingAppCoverages: 'routingAppCoverages'
} as const;
export type RoutingAppCoverageTypeEnum = typeof RoutingAppCoverageTypeEnum[keyof typeof RoutingAppCoverageTypeEnum];


/**
 * Check if a given object implements the RoutingAppCoverage interface.
 */
export function instanceOfRoutingAppCoverage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function RoutingAppCoverageFromJSON(json: any): RoutingAppCoverage {
    return RoutingAppCoverageFromJSONTyped(json, false);
}

export function RoutingAppCoverageFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingAppCoverage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : AppStoreReviewAttachmentAttributesFromJSON(json['attributes']),
        'relationships': !exists(json, 'relationships') ? undefined : AppStoreVersionSubmissionRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function RoutingAppCoverageToJSON(value?: RoutingAppCoverage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AppStoreReviewAttachmentAttributesToJSON(value.attributes),
        'relationships': AppStoreVersionSubmissionRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

