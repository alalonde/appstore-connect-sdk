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
import type { CiBuildRunAttributesSourceCommit } from './CiBuildRunAttributesSourceCommit';
import {
    CiBuildRunAttributesSourceCommitFromJSON,
    CiBuildRunAttributesSourceCommitFromJSONTyped,
    CiBuildRunAttributesSourceCommitToJSON,
} from './CiBuildRunAttributesSourceCommit';
import type { CiCompletionStatus } from './CiCompletionStatus';
import {
    CiCompletionStatusFromJSON,
    CiCompletionStatusFromJSONTyped,
    CiCompletionStatusToJSON,
} from './CiCompletionStatus';
import type { CiExecutionProgress } from './CiExecutionProgress';
import {
    CiExecutionProgressFromJSON,
    CiExecutionProgressFromJSONTyped,
    CiExecutionProgressToJSON,
} from './CiExecutionProgress';
import type { CiIssueCounts } from './CiIssueCounts';
import {
    CiIssueCountsFromJSON,
    CiIssueCountsFromJSONTyped,
    CiIssueCountsToJSON,
} from './CiIssueCounts';

/**
 * 
 * @export
 * @interface CiBuildRunAttributes
 */
export interface CiBuildRunAttributes {
    /**
     * 
     * @type {number}
     * @memberof CiBuildRunAttributes
     */
    number?: number;
    /**
     * 
     * @type {Date}
     * @memberof CiBuildRunAttributes
     */
    createdDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CiBuildRunAttributes
     */
    startedDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CiBuildRunAttributes
     */
    finishedDate?: Date;
    /**
     * 
     * @type {CiBuildRunAttributesSourceCommit}
     * @memberof CiBuildRunAttributes
     */
    sourceCommit?: CiBuildRunAttributesSourceCommit;
    /**
     * 
     * @type {CiBuildRunAttributesSourceCommit}
     * @memberof CiBuildRunAttributes
     */
    destinationCommit?: CiBuildRunAttributesSourceCommit;
    /**
     * 
     * @type {boolean}
     * @memberof CiBuildRunAttributes
     */
    isPullRequestBuild?: boolean;
    /**
     * 
     * @type {CiIssueCounts}
     * @memberof CiBuildRunAttributes
     */
    issueCounts?: CiIssueCounts;
    /**
     * 
     * @type {CiExecutionProgress}
     * @memberof CiBuildRunAttributes
     */
    executionProgress?: CiExecutionProgress;
    /**
     * 
     * @type {CiCompletionStatus}
     * @memberof CiBuildRunAttributes
     */
    completionStatus?: CiCompletionStatus;
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunAttributes
     */
    startReason?: CiBuildRunAttributesStartReasonEnum;
    /**
     * 
     * @type {string}
     * @memberof CiBuildRunAttributes
     */
    cancelReason?: CiBuildRunAttributesCancelReasonEnum;
}


/**
 * @export
 */
export const CiBuildRunAttributesStartReasonEnum = {
    GitRefChange: 'GIT_REF_CHANGE',
    Manual: 'MANUAL',
    ManualRebuild: 'MANUAL_REBUILD',
    PullRequestOpen: 'PULL_REQUEST_OPEN',
    PullRequestUpdate: 'PULL_REQUEST_UPDATE',
    Schedule: 'SCHEDULE'
} as const;
export type CiBuildRunAttributesStartReasonEnum = typeof CiBuildRunAttributesStartReasonEnum[keyof typeof CiBuildRunAttributesStartReasonEnum];

/**
 * @export
 */
export const CiBuildRunAttributesCancelReasonEnum = {
    AutomaticallyByNewerBuild: 'AUTOMATICALLY_BY_NEWER_BUILD',
    ManuallyByUser: 'MANUALLY_BY_USER'
} as const;
export type CiBuildRunAttributesCancelReasonEnum = typeof CiBuildRunAttributesCancelReasonEnum[keyof typeof CiBuildRunAttributesCancelReasonEnum];


/**
 * Check if a given object implements the CiBuildRunAttributes interface.
 */
export function instanceOfCiBuildRunAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunAttributesFromJSON(json: any): CiBuildRunAttributes {
    return CiBuildRunAttributesFromJSONTyped(json, false);
}

export function CiBuildRunAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
        'createdDate': !exists(json, 'createdDate') ? undefined : (new Date(json['createdDate'])),
        'startedDate': !exists(json, 'startedDate') ? undefined : (new Date(json['startedDate'])),
        'finishedDate': !exists(json, 'finishedDate') ? undefined : (new Date(json['finishedDate'])),
        'sourceCommit': !exists(json, 'sourceCommit') ? undefined : CiBuildRunAttributesSourceCommitFromJSON(json['sourceCommit']),
        'destinationCommit': !exists(json, 'destinationCommit') ? undefined : CiBuildRunAttributesSourceCommitFromJSON(json['destinationCommit']),
        'isPullRequestBuild': !exists(json, 'isPullRequestBuild') ? undefined : json['isPullRequestBuild'],
        'issueCounts': !exists(json, 'issueCounts') ? undefined : CiIssueCountsFromJSON(json['issueCounts']),
        'executionProgress': !exists(json, 'executionProgress') ? undefined : CiExecutionProgressFromJSON(json['executionProgress']),
        'completionStatus': !exists(json, 'completionStatus') ? undefined : CiCompletionStatusFromJSON(json['completionStatus']),
        'startReason': !exists(json, 'startReason') ? undefined : json['startReason'],
        'cancelReason': !exists(json, 'cancelReason') ? undefined : json['cancelReason'],
    };
}

export function CiBuildRunAttributesToJSON(value?: CiBuildRunAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'number': value.number,
        'createdDate': value.createdDate === undefined ? undefined : (value.createdDate.toISOString()),
        'startedDate': value.startedDate === undefined ? undefined : (value.startedDate.toISOString()),
        'finishedDate': value.finishedDate === undefined ? undefined : (value.finishedDate.toISOString()),
        'sourceCommit': CiBuildRunAttributesSourceCommitToJSON(value.sourceCommit),
        'destinationCommit': CiBuildRunAttributesSourceCommitToJSON(value.destinationCommit),
        'isPullRequestBuild': value.isPullRequestBuild,
        'issueCounts': CiIssueCountsToJSON(value.issueCounts),
        'executionProgress': CiExecutionProgressToJSON(value.executionProgress),
        'completionStatus': CiCompletionStatusToJSON(value.completionStatus),
        'startReason': value.startReason,
        'cancelReason': value.cancelReason,
    };
}

