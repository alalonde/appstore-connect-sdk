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
import type { CiWorkflowRelationshipsMacOsVersionData } from './CiWorkflowRelationshipsMacOsVersionData';
import {
    CiWorkflowRelationshipsMacOsVersionDataFromJSON,
    CiWorkflowRelationshipsMacOsVersionDataFromJSONTyped,
    CiWorkflowRelationshipsMacOsVersionDataToJSON,
} from './CiWorkflowRelationshipsMacOsVersionData';

/**
 * 
 * @export
 * @interface CiWorkflowUpdateRequestDataRelationshipsMacOsVersion
 */
export interface CiWorkflowUpdateRequestDataRelationshipsMacOsVersion {
    /**
     * 
     * @type {CiWorkflowRelationshipsMacOsVersionData}
     * @memberof CiWorkflowUpdateRequestDataRelationshipsMacOsVersion
     */
    data?: CiWorkflowRelationshipsMacOsVersionData;
}

/**
 * Check if a given object implements the CiWorkflowUpdateRequestDataRelationshipsMacOsVersion interface.
 */
export function instanceOfCiWorkflowUpdateRequestDataRelationshipsMacOsVersion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSON(json: any): CiWorkflowUpdateRequestDataRelationshipsMacOsVersion {
    return CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSONTyped(json, false);
}

export function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiWorkflowUpdateRequestDataRelationshipsMacOsVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : CiWorkflowRelationshipsMacOsVersionDataFromJSON(json['data']),
    };
}

export function CiWorkflowUpdateRequestDataRelationshipsMacOsVersionToJSON(value?: CiWorkflowUpdateRequestDataRelationshipsMacOsVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CiWorkflowRelationshipsMacOsVersionDataToJSON(value.data),
    };
}

