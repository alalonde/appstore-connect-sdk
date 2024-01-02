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
import type { CiBranchPatternsPatternsInner } from './CiBranchPatternsPatternsInner';
import {
    CiBranchPatternsPatternsInnerFromJSON,
    CiBranchPatternsPatternsInnerFromJSONTyped,
    CiBranchPatternsPatternsInnerToJSON,
} from './CiBranchPatternsPatternsInner';

/**
 * 
 * @export
 * @interface CiBranchPatterns
 */
export interface CiBranchPatterns {
    /**
     * 
     * @type {boolean}
     * @memberof CiBranchPatterns
     */
    isAllMatch?: boolean;
    /**
     * 
     * @type {Array<CiBranchPatternsPatternsInner>}
     * @memberof CiBranchPatterns
     */
    patterns?: Array<CiBranchPatternsPatternsInner>;
}

/**
 * Check if a given object implements the CiBranchPatterns interface.
 */
export function instanceOfCiBranchPatterns(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBranchPatternsFromJSON(json: any): CiBranchPatterns {
    return CiBranchPatternsFromJSONTyped(json, false);
}

export function CiBranchPatternsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBranchPatterns {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isAllMatch': !exists(json, 'isAllMatch') ? undefined : json['isAllMatch'],
        'patterns': !exists(json, 'patterns') ? undefined : ((json['patterns'] as Array<any>).map(CiBranchPatternsPatternsInnerFromJSON)),
    };
}

export function CiBranchPatternsToJSON(value?: CiBranchPatterns | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isAllMatch': value.isAllMatch,
        'patterns': value.patterns === undefined ? undefined : ((value.patterns as Array<any>).map(CiBranchPatternsPatternsInnerToJSON)),
    };
}

