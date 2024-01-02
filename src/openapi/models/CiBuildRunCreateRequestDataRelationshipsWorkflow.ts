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
import type { CiBuildRunRelationshipsWorkflowData } from './CiBuildRunRelationshipsWorkflowData';
import {
    CiBuildRunRelationshipsWorkflowDataFromJSON,
    CiBuildRunRelationshipsWorkflowDataFromJSONTyped,
    CiBuildRunRelationshipsWorkflowDataToJSON,
} from './CiBuildRunRelationshipsWorkflowData';

/**
 * 
 * @export
 * @interface CiBuildRunCreateRequestDataRelationshipsWorkflow
 */
export interface CiBuildRunCreateRequestDataRelationshipsWorkflow {
    /**
     * 
     * @type {CiBuildRunRelationshipsWorkflowData}
     * @memberof CiBuildRunCreateRequestDataRelationshipsWorkflow
     */
    data?: CiBuildRunRelationshipsWorkflowData;
}

/**
 * Check if a given object implements the CiBuildRunCreateRequestDataRelationshipsWorkflow interface.
 */
export function instanceOfCiBuildRunCreateRequestDataRelationshipsWorkflow(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiBuildRunCreateRequestDataRelationshipsWorkflowFromJSON(json: any): CiBuildRunCreateRequestDataRelationshipsWorkflow {
    return CiBuildRunCreateRequestDataRelationshipsWorkflowFromJSONTyped(json, false);
}

export function CiBuildRunCreateRequestDataRelationshipsWorkflowFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiBuildRunCreateRequestDataRelationshipsWorkflow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CiBuildRunRelationshipsWorkflowDataFromJSON(json['data']),
    };
}

export function CiBuildRunCreateRequestDataRelationshipsWorkflowToJSON(value?: CiBuildRunCreateRequestDataRelationshipsWorkflow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiBuildRunRelationshipsWorkflowDataToJSON(value.data),
    };
}

