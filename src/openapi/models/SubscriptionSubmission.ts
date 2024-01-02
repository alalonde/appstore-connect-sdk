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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';
import type { SubscriptionAppStoreReviewScreenshotRelationships } from './SubscriptionAppStoreReviewScreenshotRelationships';
import {
    SubscriptionAppStoreReviewScreenshotRelationshipsFromJSON,
    SubscriptionAppStoreReviewScreenshotRelationshipsFromJSONTyped,
    SubscriptionAppStoreReviewScreenshotRelationshipsToJSON,
} from './SubscriptionAppStoreReviewScreenshotRelationships';

/**
 * 
 * @export
 * @interface SubscriptionSubmission
 */
export interface SubscriptionSubmission {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSubmission
     */
    type: SubscriptionSubmissionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionSubmission
     */
    id: string;
    /**
     * 
     * @type {SubscriptionAppStoreReviewScreenshotRelationships}
     * @memberof SubscriptionSubmission
     */
    relationships?: SubscriptionAppStoreReviewScreenshotRelationships;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof SubscriptionSubmission
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const SubscriptionSubmissionTypeEnum = {
    SubscriptionSubmissions: 'subscriptionSubmissions'
} as const;
export type SubscriptionSubmissionTypeEnum = typeof SubscriptionSubmissionTypeEnum[keyof typeof SubscriptionSubmissionTypeEnum];


/**
 * Check if a given object implements the SubscriptionSubmission interface.
 */
export function instanceOfSubscriptionSubmission(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function SubscriptionSubmissionFromJSON(json: any): SubscriptionSubmission {
    return SubscriptionSubmissionFromJSONTyped(json, false);
}

export function SubscriptionSubmissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionSubmission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'relationships': !exists(json, 'relationships') ? undefined : SubscriptionAppStoreReviewScreenshotRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function SubscriptionSubmissionToJSON(value?: SubscriptionSubmission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'relationships': SubscriptionAppStoreReviewScreenshotRelationshipsToJSON(value.relationships),
        'links': ResourceLinksToJSON(value.links),
    };
}

