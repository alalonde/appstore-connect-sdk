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
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';

/**
 * 
 * @export
 * @interface ReviewSubmissionAttributes
 */
export interface ReviewSubmissionAttributes {
    /**
     * 
     * @type {Platform}
     * @memberof ReviewSubmissionAttributes
     */
    platform?: Platform;
    /**
     * 
     * @type {Date}
     * @memberof ReviewSubmissionAttributes
     */
    submittedDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ReviewSubmissionAttributes
     */
    state?: ReviewSubmissionAttributesStateEnum;
}


/**
 * @export
 */
export const ReviewSubmissionAttributesStateEnum = {
    ReadyForReview: 'READY_FOR_REVIEW',
    WaitingForReview: 'WAITING_FOR_REVIEW',
    InReview: 'IN_REVIEW',
    UnresolvedIssues: 'UNRESOLVED_ISSUES',
    Canceling: 'CANCELING',
    Completing: 'COMPLETING',
    Complete: 'COMPLETE'
} as const;
export type ReviewSubmissionAttributesStateEnum = typeof ReviewSubmissionAttributesStateEnum[keyof typeof ReviewSubmissionAttributesStateEnum];


/**
 * Check if a given object implements the ReviewSubmissionAttributes interface.
 */
export function instanceOfReviewSubmissionAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewSubmissionAttributesFromJSON(json: any): ReviewSubmissionAttributes {
    return ReviewSubmissionAttributesFromJSONTyped(json, false);
}

export function ReviewSubmissionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'platform': !exists(json, 'platform') ? undefined : PlatformFromJSON(json['platform']),
        'submittedDate': !exists(json, 'submittedDate') ? undefined : (new Date(json['submittedDate'])),
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function ReviewSubmissionAttributesToJSON(value?: ReviewSubmissionAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'platform': PlatformToJSON(value.platform),
        'submittedDate': value.submittedDate === undefined ? undefined : (value.submittedDate.toISOString()),
        'state': value.state,
    };
}

