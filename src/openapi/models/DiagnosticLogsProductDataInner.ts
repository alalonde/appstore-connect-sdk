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
import type { DiagnosticLogsProductDataInnerDiagnosticInsightsInner } from './DiagnosticLogsProductDataInnerDiagnosticInsightsInner';
import {
    DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSON,
} from './DiagnosticLogsProductDataInnerDiagnosticInsightsInner';
import type { DiagnosticLogsProductDataInnerDiagnosticLogsInner } from './DiagnosticLogsProductDataInnerDiagnosticLogsInner';
import {
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSON,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSONTyped,
    DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSON,
} from './DiagnosticLogsProductDataInnerDiagnosticLogsInner';

/**
 * 
 * @export
 * @interface DiagnosticLogsProductDataInner
 */
export interface DiagnosticLogsProductDataInner {
    /**
     * 
     * @type {string}
     * @memberof DiagnosticLogsProductDataInner
     */
    signatureId?: string;
    /**
     * 
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticInsightsInner>}
     * @memberof DiagnosticLogsProductDataInner
     */
    diagnosticInsights?: Array<DiagnosticLogsProductDataInnerDiagnosticInsightsInner>;
    /**
     * 
     * @type {Array<DiagnosticLogsProductDataInnerDiagnosticLogsInner>}
     * @memberof DiagnosticLogsProductDataInner
     */
    diagnosticLogs?: Array<DiagnosticLogsProductDataInnerDiagnosticLogsInner>;
}

/**
 * Check if a given object implements the DiagnosticLogsProductDataInner interface.
 */
export function instanceOfDiagnosticLogsProductDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticLogsProductDataInnerFromJSON(json: any): DiagnosticLogsProductDataInner {
    return DiagnosticLogsProductDataInnerFromJSONTyped(json, false);
}

export function DiagnosticLogsProductDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticLogsProductDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signatureId': !exists(json, 'signatureId') ? undefined : json['signatureId'],
        'diagnosticInsights': !exists(json, 'diagnosticInsights') ? undefined : ((json['diagnosticInsights'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticInsightsInnerFromJSON)),
        'diagnosticLogs': !exists(json, 'diagnosticLogs') ? undefined : ((json['diagnosticLogs'] as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerFromJSON)),
    };
}

export function DiagnosticLogsProductDataInnerToJSON(value?: DiagnosticLogsProductDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signatureId': value.signatureId,
        'diagnosticInsights': value.diagnosticInsights === undefined ? undefined : ((value.diagnosticInsights as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticInsightsInnerToJSON)),
        'diagnosticLogs': value.diagnosticLogs === undefined ? undefined : ((value.diagnosticLogs as Array<any>).map(DiagnosticLogsProductDataInnerDiagnosticLogsInnerToJSON)),
    };
}

