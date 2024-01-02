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
import type { SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters } from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters';
import {
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSONTyped,
    SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON,
} from './SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters';

/**
 * 
 * @export
 * @interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships
 */
export interface SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships {
    /**
     * 
     * @type {SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters}
     * @memberof SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships
     */
    sandboxTesters: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTesters;
}

/**
 * Check if a given object implements the SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships interface.
 */
export function instanceOfSandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sandboxTesters" in value;

    return isInstance;
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSON(json: any): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships {
    return SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSONTyped(json, false);
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sandboxTesters': SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersFromJSON(json['sandboxTesters']),
    };
}

export function SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsToJSON(value?: SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sandboxTesters': SandboxTestersClearPurchaseHistoryRequestV2CreateRequestDataRelationshipsSandboxTestersToJSON(value.sandboxTesters),
    };
}

